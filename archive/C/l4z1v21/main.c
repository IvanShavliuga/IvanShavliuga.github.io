/****************************************************************************
 *                                                                          *
 * File    : main.c                                                         *
 *                                                                          *
 * Purpose : Console mode (command line) program.                           *
 *                                                                          *
 * History : Date      Reason                                               *
 *           00/00/00  Created                                              *
 *                                                                          *
 ****************************************************************************/

#include <stdio.h>
#include <math.h>
/****************************************************************************
 *                                                                          *
 * Function: main                                                           *
 *                                                                          *
 * Purpose : Main entry point.                                              *
 *                                                                          *
 * History : Date      Reason                                               *
 *           00/00/00  Created                                              *
 *                                                                          *
 ****************************************************************************/

int main(int argc, char *argv[])
{
    /* TODO: Enter code here */
    int n;            //����������� �������
    scanf("%d",&n);   //���� ����������
    double a[n];      //������ ������
    //���� ��������� �������
    for(int i=0; i<n; i++) scanf("%lf",&a[i]);
    int minindex1=0,  //����� 1-�� ��������
        maxindex1=0;  //����� 1-�� ���������
    double max1=a[0], //������ ��������
        min1=a[0];    //������ �������
    for(int i=1; i<n;i++){ //����� 1-�� �������� � 
                           //���������
        if(a[i]<min1) {min1=a[i];minindex1=i;} //min
        if(a[i]>max1) {max1=a[i];maxindex1=i;} //max
    }
    int minindex2,    //����� 2-�� ��������
        maxindex2;    //����� 2-�� ���������
    double max2,      //2-� ��������
        min2;         //2-� �������
    //� ����� 0-� ������� ������ ���./����.?
    //����� 2-� ������� 1-� �������
    if(minindex1==0) minindex2=1; 
    else             minindex2=0;
    //2-� �������� 1-� �������
    if(maxindex1==0) maxindex2=1;
    else             maxindex2=0;
    max2=a[maxindex2];
    min2=a[minindex2];
    for(int i=1; i<n;i++){ //����� 2-�� �������� � 
                           //���������
        if(a[i]<min2&&minindex1!=i) //������ �������?
            {min2=a[i];minindex2=i;} //��� -- min
        if(a[i]>max2&&maxindex1!=i) //������ ����.?
            {max2=a[i];maxindex2=i;} //��� -- max
    }
    //������ 3-� ����.
    int maxindex3;    //����� 3-�� ���������
    double max3=a[2]; //3-� ��������
    for(int i=1; i<n;i++){ //����� 3-�� ���������
        if(a[i]>max3&&maxindex1!=i&&maxindex2!=i) 
            {max3=a[i];maxindex3=i;} //max
    }
    printf("%lf\n",min2*max3);
    //���� ���. � ���� ������, ��� �������� ������?
    if(abs(maxindex3-minindex2)>1){
        //����� ������� ���������
        //��� ���� ������ ����. ��� ��������
        int start=(minindex2>maxindex3)?(maxindex3):
                   (minindex2);
        int end  =(minindex2<maxindex3)?(maxindex3):
                   (minindex2);
        //���������
        for(int i=start+1;i<end;i++) a[i]=0;
    }
    //����� ��������� �������
    for(int i=0; i<n; i++) printf("%.3lf ",a[i]);
    printf("\n");
    return 0;
}

