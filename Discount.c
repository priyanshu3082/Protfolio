 //Total Expance=quantity*rate-(quantity*rate*discount/100)
#include<stdio.h>
int main()
{
	float discount,quantity,rate,total;
	discount=10;
	printf("Enter the value of quantity and rate: ");
	
	total=quantity*rate-(quantity*rate*discount/100);
	if(quantity>100)
	{
		printf("%f",total);
	}	else{
			printf("NO Discount");
		}
	
	return 0;
}
