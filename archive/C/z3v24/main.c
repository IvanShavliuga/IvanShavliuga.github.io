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
  int n;
  scanf("%d",&n);
  int sr=0, sl=0; // ����� ���� ������ � ����� ������
  char z[n];      // ���� �����
  scanf("%s",z); // ������ ���� ���� ('0'-48 '1'-49..)
  //������������ ���� ����� ����� 
  for(int i=0; i<n/2; i++)
    sl+=z[i]-'0'; // ��������� ���� ���� � ���� �����   
  //������������ ���� ������ ����� 
  for(int i=n/2; i<n; i++)
    sr+=z[i]-'0'; // ��������� ���� ���� � ���� ����� 
  int r=(sr==sl); // �����-1; 0-���
  printf("%d\n",r);
  return 0;
}

