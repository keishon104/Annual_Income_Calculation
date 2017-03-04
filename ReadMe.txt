This program was referenced from FAMU intro to computer programming course COP3014C. I intend on using these projects as a way to learn and demostrate my understanding using a particular language, algorithm, framework, etc. 

Link to the actual project: http://www.cis.famu.edu/~cop3014cjoe/Homeworks/spring2017_PROG1_HowMuch12

--------------------------------------------------------------------------------------------------------------------------------

Description:     Read amount of 12 monthly paychecks.
                 Compute the total amount paid.
                 Compute the average monthly paycheck amount.


             +--------------+
             |              |
 float pay1  |              |
    -------->|   program    |  float Total_Pay
    -------->|              |------------>
    -------->|  howmuch12   |
       ...   |              |  float Average_Pay
 float pay12 |              |------------>
    -------->|              |
             |              |
             +--------------+

Preliminary:   Declare variables pay1, pay2,..., pay12, 
               and TotalPay and AveragePay.

Algorithm:
               1. Read values for pay1, pay2, ... pay12.
                  NOTE: Ask for each check by month (capitialized), e.g.,

                        ENTER check amount for JANUARY: 

               2. Compute Total_Pay = pay1 + pay2 + ... 

               3. Compute Average_Pay = Total_Pay / 12

               4. Display Total_Pay as:    TOTAL PAY = $ xxxxxx

               5. Display Average_Pay as:  AVERAGE PAY = $ xxxxxx



Coding - Required lines (top):

           #include <iostream>
           using namespace std;
           int main()
           {   

Coding - Preliminary: 

               //---------------------------------------------
               // Declare all variables.
               //---------------------------------------------
               float pay1,      // First paycheck amount.
                     pay2,      // Second paycheck amount.
                     ...
                     

Coding - Algorithm:

               //-|--------------------------------------------------
               //-| 1. Read values for pay1, pay2, ... pay12.
               //-|--------------------------------------------------


               //-|--------------------------------------------------
               //-| 2. Compute Total_Pay = pay1 + pay2 + ...pay12.
               //-|--------------------------------------------------
               

               //-|--------------------------------------------------
               //-| 3. Compute Average_Pay = Total_Pay / 12.
               //-|--------------------------------------------------
               

               //-|--------------------------------------------------
               //-| 4. Display Total_Pay as: TOTAL PAY = $ xxxxxx
               //-|--------------------------------------------------
               

               //-|--------------------------------------------------
               //-| 5. Display Average_Pay as: AVERAGE PAY = $ xxxxxx
               //-|--------------------------------------------------
