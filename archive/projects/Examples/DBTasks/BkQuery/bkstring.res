        ��  ��                  ^   0   S Q L Q U E R Y 1   ��)    0           select EMP_NO, Avg(Salary) as Salary
  from employee, employee, employee
  group by EMP_NO
  �   0   S Q L Q U E R Y 2   ��*    0           select Company, Sum(ItemsTotal) - Sum(AmountPaid) as AmountDue
  from customer, orders
  where Customer.CustNo = Orders.CustNo
  group by Company
  �       �� ��3     0           I B :   V e r y   I n e f f i c i e n t   Q u e r y  D B :   A m o u n t   D u e   B y   C u s t o m e r                             