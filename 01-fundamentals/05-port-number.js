/* 
------------------------------------ PORT Number ----------------------------------

--> What is PORT Number ? 
    Each and every running application has a PORT number.PORT number helps OS
    to distinguish between different running applications to send data. 
    When the data comes to the computer via network card than OS uses PORT Number to 
    decide that kis application ko data send krna h. 

    When the request goes to the server than IP address , MAC address , request
    and a PORT number is attached. 
    When the response comes to the client than the response will contain the
    PORT number which will help OS to decide ki kis running application ko 
    data send krna h. 

    Even when we open different tabs in chrome and we visit different websites 
    than each tab has a new PORT number.

    PORT number simply helps operating system to decide that kis application ko 
    data bhejna h when the data comes to the computer via network card. 

--> How we can identify a device uniquely ? 
    By using IP address and MAC address we can identify a PORT Number uniquely.

--> PORT number 
    It is of size 16 bit.It is unsigned integer. 
    It means PORT Number is a positive number. 

    Range : [0,2^16-1] 
    There are total of 2^16 or 65,536 different port numbers. 

    Highest Port Number : 2^16-1 or 65,535
    Range : [0,65535]

--> Well Known PORTS / Reserved PORTS (0-1023)

    Protocol    Port Number
    http          80 
    https         443
    dns           53
    smtp          25
    ssh           22
    ftp           21

    Registered PORTS (1024 - 49,151)
    We cannot registered ports and they cannot be used publicly.
    
--> Public/Dynamic PORTS (49,152 - 65,535)
    When we request to any website or open any tab than a random dnyamic 
    PORT is allocated between 49,152 and 65,535
*/
