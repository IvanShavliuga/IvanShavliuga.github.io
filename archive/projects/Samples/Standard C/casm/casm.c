/****************************************************************************
 *                                                                          *
 * Filename: casm.c                                                         *
 *                                                                          *
 * Purpose : Standard C sample for Pelles C for Windows.                    *
 *                                                                          *
 *           Demonstrates using the X86 inline assembler extension.         *
 *                                                                          *
 * History : Date      Reason                                               *
 *           05-03-12  Created                                              *
 *                                                                          *
 ****************************************************************************/

#include <stdio.h>

static char format[] = "%s %s!\n";
static char hello[] = "Hello";
static char world[] = "world";

/****************************************************************************
 *                                                                          *
 * Function: main                                                           *
 *                                                                          *
 * Purpose : The entry point, of course!                                    *
 *                                                                          *
 * History : Date      Reason                                               *
 *           05-03-12  Created                                              *
 *                                                                          *
 ****************************************************************************/

int __cdecl main(void)
{
    __asm {
        // Call the C runtime function printf.
        // Same as the C code "printf(format, hello, world);"
        mov  eax,offset world
        push eax
        mov  eax,offset hello
        push eax
        mov  eax,offset format
        push eax
        call printf
        // printf is __cdecl, so we must clean the stack after the call.
        pop  ecx
        pop  ecx
        pop  ecx
    }
    return 0;
}
