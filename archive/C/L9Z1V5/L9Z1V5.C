#include <stdio.h>
#include <stdlib.h>
#include <string.h>

unsigned int skorost, /*�������*/
	      naprav,  /*���ࠢ�����*/
	      pole,    /*����*/
	      error;   /*��� �訡��*/
typedef struct TStudent {
    unsigned char  fam[15],ima[15],otez[15]; /*���*/
    unsigned int  kurs; /*����*/
    double sball; /*�।��� ����*/
} TStudent;
//����஢�� ��⠢����
//�� �����⠭�� '>' naprav=0
//�� �뢠���    '<' naprav=1
void SortIns(TStudent st[],int count)
{
 int j,i;               //������� ��६����
 TStudent tmp;          //�����
 if(naprav==0) {        //�� �����⠭��
 for(j=1;j<count;j++){  //�஢��塞 ����� ������� � �����
   i = j - 1;
   tmp = st[j];         //�����㥬 j-� ������� � �����
   switch(pole)         //�� ������ ���� ���஢���
   {                    //strcmp = str1 - str2 (-31 = '�' - '�')
       case 1:          //�������
	 while(strcmp(tmp.fam,st[i].fam)<0)
	 {
	   st[i+1] = st[i];
	   i--;
	   if(i<0) break;
	 }
	 break;
       case 2:          //���
	 while(strcmp(tmp.ima,st[i].ima)<0)
	 {
	   st[i+1] = st[i];
	   i--;
	   if(i<0) break;
	 }
	 break;
       case 3:          //����⢮
	 while(strcmp(tmp.ima,st[i].otez)<0)
	 {
	   st[i+1] = st[i];
	   i--;
	   if(i<0) break;
	 }
	 break;
       case 4:          //����
	 while(tmp.kurs<st[i].kurs)
	 {
	   st[i+1] = st[i];
	   i--;
	   if(i<0) break;
	 }
	 break;
       case 5:          //�।��� ����
	 while((tmp.sball<st[i].sball)&&(i>=0))
	 {
	     st[i+1] = st[i];
	     i--;
	 }
	 break;
   }
   st[i+1] = tmp;       //��⠢�� ����� � ���ᨢ
 }
 }else{                 //�� �뢠���
  for(j=1;j<count;j++){ //�஢��塞 ����� ������� � �����
   i = j - 1;
   tmp = st[j];         //�����㥬 j-� ������� � �����
   switch(pole)         //�� ������ ���� ���஢���
   {                    //strcmp = str1 - str2 (-31 = '�' - '�')
       case 1:          //�������
	 while(strcmp(tmp.fam,st[i].fam)>0)
	 {
	   st[i+1] = st[i];
	   i--;
	   if(i<0) break;
	 }
	 break;
       case 2:          //���
	 while(strcmp(tmp.ima,st[i].ima)>0)
	 {
	   st[i+1] = st[i];
	   i--;
	   if(i<0) break;
	 }
	 break;
       case 3:          //����⢮
	 while(strcmp(tmp.ima,st[i].otez)>0)
	 {
	   st[i+1] = st[i];
	   i--;
	   if(i<0) break;
	 }
	 break;
       case 4:          //����
	 while(tmp.kurs>st[i].kurs)
	 {
	   st[i+1] = st[i];
	   i--;
	   if(i<0) break;
	 }
	 break;
       case 5:          //�।��� ����
	 while((tmp.sball>st[i].sball)&&(i>=0))
	 {
	     st[i+1] = st[i];
	     i--;
	 }
	 break;
   }
   st[i+1] = tmp;       //��⠢�� ����� � ���ᨢ
 }
 }
}
void HoorSort(TStudent *st,int min,int max)		
{													
  int Lo,Hi;											
  TStudent buf,mid;								
  switch(pole)										
  {												
	case 1:
	  Lo=min;
  	  Hi=max;
	  mid=st[(Lo+Hi)/2];
	  do {
	  	while(!naprav?(strcmp(st[Lo].fam,mid.fam)<0):(strcmp(st[Lo].fam,mid.fam)>0)) 
		  Lo++;
	   	while(!naprav?(strcmp(st[Hi].fam,mid.fam)>0):(strcmp(st[Hi].fam,mid.fam)<0)) 
		  Hi--;
	    if(Lo<=Hi)	{
	      buf=st[Lo];
		  st[Lo]=st[Hi];
		  st[Hi]=buf;
	  	  Lo++;
		  Hi--;
		}
	  }while(Lo<=Hi);
	  if(Hi>min) HoorSort(st,min,Hi);
	  if(Lo<max) HoorSort(st,Lo,max);
	  break;
	case 2:
	  Lo=min;
  	  Hi=max;
	  mid=st[(Lo+Hi)/2];
	  do {
	  	while(!naprav?(strcmp(st[Lo].ima,mid.ima)<0):(strcmp(st[Lo].ima,mid.ima)>0)) 
		  Lo++;
	   	while(!naprav?(strcmp(st[Hi].ima,mid.ima)>0):(strcmp(st[Hi].ima,mid.ima)<0)) 
		  Hi--;
	    if(Lo<=Hi)	{
	      buf=st[Lo];
		  st[Lo]=st[Hi];
		  st[Hi]=buf;
	  	  Lo++;
		  Hi--;
		}
	  }while(Lo<=Hi);
	  if(Hi>min) HoorSort(st,min,Hi);
	  if(Lo<max) HoorSort(st,Lo,max);
	  break;
    case 3:
	  Lo=min;
  	  Hi=max;
	  mid=st[(Lo+Hi)/2];
	  do {
	  	while(!naprav?(strcmp(st[Lo].otez,mid.otez)<0):(strcmp(st[Lo].otez,mid.otez)>0)) 
		  Lo++;
	   	while(!naprav?(strcmp(st[Hi].otez,mid.otez)>0):(strcmp(st[Hi].otez,mid.otez)<0)) 
		  Hi--;
	    if(Lo<=Hi)	{
	      buf=st[Lo];
		  st[Lo]=st[Hi];
		  st[Hi]=buf;
	  	  Lo++;
		  Hi--;
		}
	  }while(Lo<=Hi);
	  if(Hi>min) HoorSort(st,min,Hi);
	  if(Lo<max) HoorSort(st,Lo,max);
	  break;
    case 4:
	  Lo=min;
  	  Hi=max;
	  mid=st[(Lo+Hi)/2];
	  do {
	  	while(!naprav?(st[Lo].kurs<mid.kurs):(st[Lo].kurs>mid.kurs)) 
		  Lo++;
	   	while(!naprav?(st[Hi].kurs>mid.kurs):(st[Hi].kurs<mid.kurs)) 
		  Hi--;
	    if(Lo<=Hi)	{
	      buf=st[Lo];
		  st[Lo]=st[Hi];
		  st[Hi]=buf;
	  	  Lo++;
		  Hi--;
		}
	  }while(Lo<=Hi);
	  if(Hi>min) HoorSort(st,min,Hi);
	  if(Lo<max) HoorSort(st,Lo,max);
	  break;
	case 5:
	  Lo=min;
  	  Hi=max;
	  mid=st[(Lo+Hi)/2];
	  do {
	  	while(!naprav?(st[Lo].sball<mid.sball):(st[Lo].sball>mid.sball)) 
		  Lo++;
	   	while(!naprav?(st[Hi].sball>mid.sball):(st[Hi].sball<mid.sball)) 
		  Hi--;
	    if(Lo<=Hi)	{
	      buf=st[Lo];
		  st[Lo]=st[Hi];
		  st[Hi]=buf;
	  	  Lo++;
		  Hi--;
		}
	  }while(Lo<=Hi);
	  if(Hi>min) HoorSort(st,min,Hi);
	  if(Lo<max) HoorSort(st,Lo,max);
	  break;
  }
}

//�८�ࠧ���⥫� ������
TStudent StringToStudent(char *string)
{
   TStudent st; //����頥��� �������
   int i;       //�����᭠� ��६�����
   // ��ଠ� ��ப�:
   // ������� ��� �������� [����], �������_����
   //  15B     15B  15B      1B     3B 
   // ���� ᨬ����-ࠧ����⥫� ' '
   for(i=0;i<15; i++)
   {
		st.fam[i]=0;
        st.ima[i]=0;
		st.otez[i]=0; 
   }
   st.kurs=0;  //0-��� �訡��
   st.sball=0.0;
   i=0;
   while((*string!=' ')&&string!=NULL)
   {
     if(i<15) st.fam[i]=*string;
     string++;
     i++;
   } 
   // ���� ᨬ����-ࠧ����⥫� ' '
   //���室 �� ᫥���騩 ᨬ���
   string++;
   i=0;
   while((*string!=' ')&&string!=NULL)
   {
     if(i<15) st.ima[i]=*string;
     string++;
     i++;
   } 
   // ���� ᨬ����-ࠧ����⥫� ' '
   //���室 �� ᫥���騩 ᨬ���
   string++;
   i=0;
   while((*string!=' ')&&string!=NULL)
   {
     if(i<15) st.otez[i]=*string;
     string++;
     i++;
   }
   //���室 �� ᫥���騩 ᨬ���
   string++;
   if(*string=='[')
   {
     string++;
     st.kurs=*string-'0';
     if(st.kurs<0||st.kurs>5) st.kurs=0; //��� �訡��
     string++;
     if(*string==']') string++;
     else             st.kurs=0;
     if(*string==',') string++;
     else             st.kurs=0;
     if(*string==' ') string++;
     else             st.kurs=0;
     st.sball=atof(string);  
   }
   else
     st.kurs=0;
   return st;
}
int main(int argc,char *argv[])
{
    int i,count=0;
		char *s;
    TStudent *students=NULL;
	printf("������ୠ� ࠡ�� #9\n"
	   "������� #1 ��ਠ�� #5\n"
	   "������ �. �. 06-��-2\n"
	   "������ ������⢮ ��㤥�⮢\n");
    while(count<=0)
	{
    	gets(s);  
	    count=atoi(s);
        if(count<=0)  printf("�訡��!\n"); 
		
 	}   
	students=(TStudent *)calloc(count,sizeof(TStudent));
    if(!students) { printf("�訡��!\n"); return 0; }
    printf("������ ��㤥�⮢ � �ଠ� ");
    printf("������� ��� ����⢮ [����], �।��� ����:\n");
    error=1;  
	for(i=0; i<count; i++){
		while(error){
			printf("#%d ",i+1);
			gets(s);
		    students[i]=StringToStudent(s);  
			if(students[i].kurs==0) error=1;
			else                    error=0;
		}
		error=1;
    }
    error=0;
    if(argc==4)
    {
	if(!strcmp(argv[1],"a:slow"))      skorost=0; //��������
	else if(!strcmp(argv[1],"a:fast")) skorost=1; //������
	else error=1;

	if(!strcmp(argv[2],"d:inc"))      naprav=0; //�����⠭��
	else if(!strcmp(argv[1],"d:dec")) naprav=1; //��뢠���
	else error=1;

	if(*argv[3]=='f')
	{
	   argv[3]+=2;
	   pole=*argv[3]-'0';
	}
	else error=1;

    }
    if(error) printf("�訡�� � �������� ��ப�");
    if((error==1)||(argc!=4))
    {
    newvvod:
		printf("������ ������ ���஢�� (0 - �������� 1 - ������):\n");
		scanf("%d",&skorost);
		printf("������ ���ࠢ����� ���஢�� (0 - �����⠭�� 1 - �뢠���):\n");
		scanf("%d",&naprav);
		printf("������ ����� ����:\n");
		scanf("%d",&pole);
		if(pole>5||naprav>1||skorost>1||pole==0)  
			goto newvvod;
		 
    }
    printf("��࠭�� ��ࠬ����:\n");
    printf("������: %s\n",(skorost)?("������"):("��������"));
    printf("���ࠢ����� %s\n",(!naprav)?("�����⠭��"):("��뢠���"));
    printf("����: %d\n",pole);
    printf("����஢��.....\n");
    if(skorost==0)  SortIns(students,count);
	else            HoorSort(students,0,count);
    for(i=0; i<count; i++)
      printf("%d %15s %15s %15s %d %0.1lf\n",i+1,students[i].fam,students[i].ima,students[i].otez,students[i].kurs,students[i].sball);
    while(1){   
		printf("����஢�� ����祭�. ������ ���? (Y/N)\n");
    	i=_getch();
    	if(i=='N'||i=='n') goto newvvod;
		if(i=='Y'||i=='y'){free(students);return 0;}
	}
}