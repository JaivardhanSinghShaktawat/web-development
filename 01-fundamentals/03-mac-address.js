/* 
--------------------------------- MAC Address --------------------------------------

--> Problems In Data Transfer And Mac Address 
    
    Suppose x has IP address as A and y has IP address as B.If x request something
    from y and y server is busy for 5 minutes and will give response after 5 minutes
    only.Suppose if x disconnect it's internet for 2 to 3 minutes than the IP address
    of x which is A will be taken.

    Now , suppose a new user z connects with internet and ISP gives A as IP address
    to z.Now , after 5 minutes the server y with IP address B will give the result
    to z which has IP address as A. 

    So , this is one of the problems that we might face in transfering data on
    the internet via IP address.Because IP address are dynamic and they 
    change rapidly as we connect/disconnect from the internet. 

    IP address is dynamic address and MAC adadress is permanent address. 

--> MAC Address : It stands for Medium Access Control.It is the permanent 
    address of the device/machine. 
    It is the address of the hardware/computer.
    It comes with your device computer/laptop/mobile. 
    MAC address apke device k sath attach hoke aata h. 

    Note : So when we request something from the internet.The request contains
    the IP address and MAC address of the sender and receiver. 

    IP Address Of Sender| MAC address of Sender | Request | IP Address Of Reciever | MAC Address Of Receiver 

    IP Address Of Sender| MAC address of Sender | Response | IP Address Of Reciever | MAC Address Of Receiver 

    So to request something and to receive something , both IP address and MAC
    address are used. 

--> Why MAC address are used ? 
    MAC address ensures that the data should be recieved by the correct receiver.
    The IP address changes rapidly , and in that case the data can be received
    by other person.To solve this problem , MAC address are also used because 
    they are permanent and MAC address is attached with the device.

    MAC address are permanent address because they are attached with the device.
    They are the address of the physical devices like computer/laptop etc. 

--> MAC Address Format 

    The size of MAC address is of 48 bit. 
    It is typically written as 12 hexadecimal digits. 
    
    3C:22:FB:A3:B4:C5 (total 12 digits hexadecimal number)

--> Note : Everyone thinks that each device has a single MAC address but it not 
    true.There can be more than one MAC address of a device. 

    How to see MAC address on your system ? 

    Windows Commands

    Step 1 : Open the command prompt
    Step 2 : ipconfig /all 

    MacOS/Linux Commands

    Step 1 : Open the terminal 
    Step 2 : ifconfig 

    You will see a lot of MAC address. 
    The ether : MAC Address will be your MAC address. 

--> Advantages of MAC Address 

    MAC address is a 48 bit number and we use hexadecimal number to represent it. 
    We ues 12 different hexadecimal number.

    Transfer of data between smartphone and computer via USB cable. 
    Transfer of data between I phone and MacBOOK via air drop (it also uses MAC address)
    Transfer of data between smart phone and computer vai LAN. 
    Transfer of data between devices via bluetooth happens by using MAC address. 
    Transfer of data between computer/mobile vai wifi. 

    Jitne bhi tarike se aap apne mobile se computer m data transfer kr skte h utne
    different tarike k liye utne MAC address allocate honge. 

    There are more than one MAC address because there are different ways to share
    data between devices.If there are x ways to share data between devices than
    there are x MAC address available. 

--> Note : We can also send the data via MAC address in a local area network. 
    So , if you want to send data in a local area network than we can send it 
    without IP address but we need MAC address. 
    We send data to the switch , the switch will send data to the computer via it's
    MAC address. 
    MAC address task is to send the data. 

--> What is VPN ? 
    VPN stands for virtual private network.

*/
