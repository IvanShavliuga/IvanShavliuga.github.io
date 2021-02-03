/****************************************************************************
 *                                                                          *
 * Filename: SQLCmd.c                                                       *
 *                                                                          *
 * Purpose : Windows console sample for Pelles C for Windows.               *
 *                                                                          *
 *           ODBC command interpreter.                                      *
 *                                                                          *
 * History : Date      Reason                                               *
 *           02-08-26  Created                                              *
 *                                                                          *
 ****************************************************************************/

#define WIN32_LEAN_AND_MEAN
#include <windows.h>
#include <sql.h>
#include <sqlext.h>
#include <stdio.h>
#include <stdlib.h>

//
// Macro to handle errors in ODBC calls.
//
#define TRYODBC(h,ht,x) \
{ \
    RETCODE rc = x; \
    if (rc != SQL_SUCCESS) \
    { \
        handle_error(h,ht,rc); \
    } \
    if (rc == SQL_ERROR) \
    { \
        fprintf(stderr, "Error in " #x "\n"); \
        goto Exit;      \
    }  \
}

//
// Misc. constants.
//
#define DISPLAY_MAX             50              // maximum column width
#define DISPLAY_FORMAT_EXTRA    3               // extra characters per column ("| <data> ")
#define DISPLAY_FORMAT          "%c %*.*s "     // column format
#define DISPLAY_FORMAT_C        "%c %-*.*s "    // text column format
#define NULL_SIZE               6               // length of "<NULL>"
#define PIPE                    '|'

//
// Structure holding column information.
//
typedef struct STR_BINDING {
    SQLSMALLINT colwidth;           // column width
    char *buffer;                   // data buffer; from SQLFetch()
    SQLINTEGER indicator;           // indicator; from SQLFetch()
    BOOL ischar;                    // is this column containing text?
    struct STR_BINDING *next;       // pointer to next node
} BINDING;

//
// Forward references.
//
static void handle_error(SQLHANDLE, SQLSMALLINT, RETCODE);
static void display_results(HSTMT, SQLSMALLINT);
static void allocate_bindings(HSTMT, SQLSMALLINT, BINDING **, SQLSMALLINT *);
static void display_titles(HSTMT, DWORD, BINDING *);
static void set_console(DWORD, BOOL);

static SHORT screen_height = 80;    // number of rows

/****************************************************************************
 *                                                                          *
 * Function: main                                                           *
 *                                                                          *
 * Purpose : Command interpreter for SQL statements, through ODBC.          *
 *                                                                          *
 * History : Date      Reason                                               *
 *           02-08-26  Created                                              *
 *                                                                          *
 ****************************************************************************/

int main(int argc, char **argv)
{
    HENV env_handle = NULL;
    HDBC dbc_handle = NULL;
    HSTMT stmt_handle = NULL;
    char *connection;
    char input[2000];

    // Allocate an environment handle.
    if (SQLAllocHandle(SQL_HANDLE_ENV, SQL_NULL_HANDLE, &env_handle) == SQL_ERROR)
    {
        fprintf(stderr, "Unable to allocate environment handle\n");
        exit(-1);
    }

    // Register this program as a ODBC 2.x application.
    TRYODBC(env_handle, SQL_HANDLE_ENV, SQLSetEnvAttr(env_handle, SQL_ATTR_ODBC_VERSION, (SQLPOINTER)SQL_OV_ODBC2, 0));

    // Allocate a connection handle.
    TRYODBC(env_handle, SQL_HANDLE_ENV, SQLAllocHandle(SQL_HANDLE_DBC, env_handle, &dbc_handle));

    // Get any connection string (DSN) from the command line.
    connection = (argc > 1) ? *++argv : NULL;

    //
    // Connect to the driver. Use the connection string, if possible, or let the
    // driver manager prompt for connection information.
    //
    TRYODBC(dbc_handle, SQL_HANDLE_DBC, SQLDriverConnect(dbc_handle, GetDesktopWindow(),
        (SQLCHAR *)connection, SQL_NTS, NULL, 0, NULL, SQL_DRIVER_COMPLETE));

    fprintf(stderr, "Logged in!\n");

    TRYODBC(dbc_handle, SQL_HANDLE_DBC, SQLAllocHandle(SQL_HANDLE_STMT, dbc_handle, &stmt_handle));

    printf("\nEnter SQL command, press Ctrl+Z to end\n");

    // Loop to get responses and execute SQL commands.
    for (printf("SQL COMMAND>"); gets(input) != NULL; printf("SQL COMMAND>"))
    {
        RETCODE retcode;

        // Skip empty strings.
        if (!*input) continue;

        OemToCharA(input, input);

        // Execute the SQL query.
        retcode = SQLExecDirect(stmt_handle, (SQLCHAR *)input, SQL_NTS);
        switch (retcode)
        {
            case SQL_SUCCESS_WITH_INFO:
            {
                handle_error(stmt_handle, SQL_HANDLE_STMT, retcode);
                // Fall through.
            }

            case SQL_SUCCESS:
            {
                SQLSMALLINT ncols;

                TRYODBC(stmt_handle, SQL_HANDLE_STMT, SQLNumResultCols(stmt_handle, &ncols));
                if (ncols > 0)
                {
                    // The SQL command produced a result. Display it!
                    display_results(stmt_handle, ncols);
                }
                else
                {
                    SQLINTEGER rowcount;

                    TRYODBC(stmt_handle, SQL_HANDLE_STMT, SQLRowCount(stmt_handle, &rowcount));
                    if (rowcount >= 0)
                    {
                        // The SQL command made updates in the database.
                        printf("%d %s affected\n", rowcount, (rowcount == 1) ? "row" : "rows");
                    }
                }
                break;
            }

            case SQL_ERROR:
            {
                // No great success...
                handle_error(stmt_handle, SQL_HANDLE_STMT, retcode);
                break;
            }

            default:
                fprintf(stderr, "Unexpected return code: %d!\n", retcode);
                break;
        }

        TRYODBC(stmt_handle, SQL_HANDLE_STMT, SQLFreeStmt(stmt_handle, SQL_CLOSE));
    }

Exit:

    // Release ODBC handles and quit.

    if (dbc_handle)
    {
        SQLDisconnect(dbc_handle);
        SQLFreeConnect(dbc_handle);
    }
    if (env_handle)
        SQLFreeEnv(env_handle);

    printf("\nLogged out.");

    return 0;
}

/****************************************************************************
 *                                                                          *
 * Function: display_results                                                *
 *                                                                          *
 * Purpose : Display results from a database query.                         *
 *                                                                          *
 * History : Date      Reason                                               *
 *           02-08-26  Created                                              *
 *                                                                          *
 ****************************************************************************/

static void display_results(HSTMT stmt_handle, SQLSMALLINT ncols)
{
    BINDING *first_binding, *this_binding;
    SQLSMALLINT totwidth;
    RETCODE retcode;
    int count = 0;

    // Allocate memory for each column.
    allocate_bindings(stmt_handle, ncols, &first_binding, &totwidth);

    // Set screen width and display captions.
    display_titles(stmt_handle, totwidth, first_binding);

    // Fetch and display data.
    for (;;)
    {
        // Fetch a row.

        if (count++ >= screen_height - 2)
        {
            char input[100];

            printf("              ");
            set_console(totwidth+2, TRUE);
            printf("   Press ENTER to continue or Q to quit   ");
            set_console(totwidth+2, FALSE);
            gets(input);
            if (*input == 'Q' || *input == 'q')
                goto Exit;

            count = 1;
            display_titles(stmt_handle, totwidth, first_binding);
        }

        TRYODBC(stmt_handle, SQL_HANDLE_STMT, retcode = SQLFetch(stmt_handle));
        if (retcode == SQL_NO_DATA_FOUND)
            break;

        // Display data.
        for (this_binding = first_binding; this_binding != NULL; this_binding = this_binding->next)
        {
            if (this_binding->indicator != SQL_NULL_DATA)
            {
                // Map foreign characters to OEM text and display.
                CharToOemA(this_binding->buffer, this_binding->buffer);
                printf(this_binding->ischar ? DISPLAY_FORMAT_C : DISPLAY_FORMAT, PIPE,
                    this_binding->colwidth, this_binding->colwidth, this_binding->buffer);
            }
            else
            {
                printf(DISPLAY_FORMAT_C, PIPE, this_binding->colwidth, this_binding->colwidth, "<NULL>");
            }
        }
        printf(" %c\n", PIPE);
    }

    set_console(totwidth+2, TRUE);
    printf("%*.*s", totwidth+2, totwidth+2, " ");
    set_console(totwidth+2, FALSE);
    printf("\n");

Exit:
    // Release allocated memory.
    while (first_binding)
    {
        this_binding = first_binding->next;
        free(first_binding->buffer);
        free(first_binding);
        first_binding = this_binding;
    }
}

/****************************************************************************
 *                                                                          *
 * Function: allocate_bindings                                              *
 *                                                                          *
 * Purpose : Get column information and create bindings.                    *
 *                                                                          *
 * History : Date      Reason                                               *
 *           02-08-26  Created                                              *
 *                                                                          *
 ****************************************************************************/

static void allocate_bindings(HSTMT stmt_handle, SQLSMALLINT ncols, BINDING **first_binding, SQLSMALLINT *totwidth)
{
    SQLSMALLINT col;
    BINDING *this_binding, *last_binding;
    SQLINTEGER display_size, concise_type;
    SQLSMALLINT colname_size;

    *totwidth = 0;

    for (col = 1; col <= ncols; col++)
    {
        this_binding = malloc(sizeof(*this_binding));
        if (!this_binding)
        {
            fprintf(stderr, "Out of memory!\n");
            exit(-100);
        }

        if (col == 1)
            *first_binding = this_binding;
        else
            last_binding->next = this_binding;
        last_binding = this_binding;

        // Figure out the presentation width of a column (we only bind to the
        // data type char because we just *display* data. Normally, you bind
        // to the most appropriate C type for performance reasons.)
        //
        TRYODBC(stmt_handle, SQL_HANDLE_STMT, SQLColAttribute(stmt_handle,
            col, SQL_DESC_DISPLAY_SIZE, NULL, 0, NULL, &display_size));

        // Figure out if the column is numeric or alpha-numeric.
        //
        TRYODBC(stmt_handle, SQL_HANDLE_STMT, SQLColAttribute(stmt_handle,
            col, SQL_DESC_CONCISE_TYPE, NULL, 0, NULL, &concise_type));

        this_binding->ischar = (concise_type == SQL_CHAR || concise_type == SQL_VARCHAR || concise_type == SQL_LONGVARCHAR);
        this_binding->next = NULL;

        if (display_size > DISPLAY_MAX)
            display_size = DISPLAY_MAX;

        // Allocate a buffer big enough to hold a text representation of the data.
        // Add room for the terminating null character.
        //
        this_binding->buffer = (char *)malloc((display_size + 1) * sizeof(char));
        if (!this_binding->buffer)
        {
            fprintf(stderr, "Out of memory!\n");
            exit(-100);
        }

        // Map the buffer we just allocated to the drivers buffer. When the data is
        // later fetched with SQLFetch, the driver will update this buffer.
        // Note! The size is given in bytes, not characters.
        //
        TRYODBC(stmt_handle, SQL_HANDLE_STMT, SQLBindCol(stmt_handle, col, SQL_C_TCHAR,
            (SQLPOINTER)this_binding->buffer, (display_size + 1) * sizeof(char), &this_binding->indicator));

        // Figure of the size of the column caption and decide the final
        // column width for presentation.
        //
        TRYODBC(stmt_handle, SQL_HANDLE_STMT, SQLColAttribute(stmt_handle,
            col, SQL_DESC_NAME, NULL, 0, &colname_size, NULL));

        this_binding->colwidth = max(display_size, colname_size);
        if (this_binding->colwidth < NULL_SIZE)
            this_binding->colwidth = NULL_SIZE;

        *totwidth += this_binding->colwidth + DISPLAY_FORMAT_EXTRA;
    }

Exit: ;
}

/****************************************************************************
 *                                                                          *
 * Function: display_titles                                                 *
 *                                                                          *
 * Purpose : Display all column captions.                                   *
 *                                                                          *
 * History : Date      Reason                                               *
 *           02-08-26  Created                                              *
 *                                                                          *
 ****************************************************************************/

static void display_titles(HSTMT stmt_handle, DWORD totwidth, BINDING *binding)
{
    char title[DISPLAY_MAX];
    SQLSMALLINT col;

    set_console(totwidth+2, TRUE);

    // Loop through all bindings (=columns).
    for (col = 1; binding != NULL; binding = binding->next, col++)
    {
        // Get the caption for column <col>.
        TRYODBC(stmt_handle, SQL_HANDLE_STMT, SQLColAttribute(stmt_handle,
            col, SQL_DESC_NAME, title, sizeof(title), NULL, NULL));

        // Map foreign characters to OEM text and display.
        CharToOemA(title, title);
        printf(DISPLAY_FORMAT_C, PIPE, binding->colwidth, binding->colwidth, title);
    }

Exit:
    printf(" %c", PIPE);
    set_console(totwidth+2, FALSE);
    printf("\n");
}

/****************************************************************************
 *                                                                          *
 * Function: set_console                                                    *
 *                                                                          *
 * Purpose : Sets the size and mode of the console window.                  *
 *                                                                          *
 * History : Date      Reason                                               *
 *           02-08-26  Created                                              *
 *                                                                          *
 ****************************************************************************/

static void set_console(DWORD colwidth, BOOL invert)
{
    HANDLE console_handle;
    CONSOLE_SCREEN_BUFFER_INFO info;

    // Get handle of the console window.
    console_handle = GetStdHandle(STD_OUTPUT_HANDLE);
    if (console_handle != INVALID_HANDLE_VALUE)
    {
        // Get information about the console window.
        if (GetConsoleScreenBufferInfo(console_handle, &info))
        {
            // Is the width of the window less than requested?
            if (info.dwSize.X < (SHORT)colwidth)
            {
                // Make the window bigger.
                info.dwSize.X = (SHORT)colwidth;
                SetConsoleScreenBufferSize(console_handle, info.dwSize);
            }

            // Save the height of the window.
            screen_height = info.dwSize.Y;
        }

        if (invert)  /* inverted text */
            SetConsoleTextAttribute(console_handle, (WORD)(info.wAttributes | BACKGROUND_BLUE));
        else
            SetConsoleTextAttribute(console_handle, (WORD)(info.wAttributes & ~BACKGROUND_BLUE));
    }
}

/****************************************************************************
 *                                                                          *
 * Function: handle_error                                                   *
 *                                                                          *
 * Purpose : Display error messages.                                        *
 *                                                                          *
 * History : Date      Reason                                               *
 *           02-08-26  Created                                              *
 *                                                                          *
 ****************************************************************************/

static void handle_error(SQLHANDLE handle, SQLSMALLINT handle_type, RETCODE retcode)
{
    SQLSMALLINT recno = 0;
    SQLINTEGER native_error;
    char message[1000];
    char state[SQL_SQLSTATE_SIZE];

    if (retcode == SQL_INVALID_HANDLE)
    {
        fprintf(stderr, "Invalid handle!\n");
        return;
    }

    // Sometimes you get multiple errors; loop through all of them.
    while (SQLGetDiagRec(handle_type, handle, ++recno, (SQLCHAR *)state, &native_error,
        (SQLCHAR *)message, (SQLSMALLINT)sizeof(message), NULL) == SQL_SUCCESS)
    {
        // Ignore some messages...
        if (strncmp(state, "01004", 5) != 0)
        {
            // Map foreign characters to OEM text and display.
            CharToOemA(message, message);
            fprintf(stderr, "[%5.5s] %s (%d)\n", state, message, native_error);
        }
    }
}

