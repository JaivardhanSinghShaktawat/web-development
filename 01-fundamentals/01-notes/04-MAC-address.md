# MAC Address

## Problems In Data Transfer Using Only IP address.

Suppose A has IP address as x and B has IP address as y.If A request something
from B and B server is busy for 5 minutes and will give response after 5 minutes
only.Suppose if A disconnect it's internet for 2 to 3 minutes than the IP address
of A which is x will be taken.

Now , suppose a new user C connects with internet and ISP gives x as IP address to C.Now , after 5 minutes the server B with IP address y will give the result to C which has IP address as x.

So , this is one of the problems that we might face in transfering data on the internet via IP address.Because IP address are dynamic and they change rapidly as we connect/disconnect from the internet.
So if we just send the data via IP address that it can be send to the wrong device.

To solve this problem , we use both IP address as well as MAC address.

IP address is dynamic address and MAC address is permanent address.

## MAC Address

- It stands for Medium Access Control.
- It is the permanent address of the device/machine that comes attach with it.
- MAC address apke device k sath attach hoke aata h.

**Note :** So when we request something from the internet.The request contains the IP address and MAC address of the sender and receiver.

```
IP Address Of Sender| MAC address of Sender | Request | IP Address Of Reciever | MAC Address Of Receiver
```

```
IP Address Of Sender| MAC address of Sender | Response | IP Address Of Reciever | MAC Address Of Receiver
```

So to request something and to receive something , both IP address and MAC address are used.

## Why MAC address are used ?

MAC address is used to send the data to the correct device.
The IP address changes rapidly , and in that case the data can be received
by other person.To solve this problem , MAC address are also used because they are permanent and MAC address is attached with the device.

MAC address are permanent address because they are attached with the device.
They are the address of the physical devices like computer/laptop etc.

MAC Address Format : it is a 12 digit hexadecimal number separated by : after
2 digits.

- The size of MAC address is of 48 bit.
- It is typically written as 12 hexadecimal digits.
- It has 6 groups and each group has 2 hexadecimal digits.Each group size is 8 bits and each digit size is 4 bits.

3C:22:FB:A3:B4:C5 (total 12 digits hexadecimal number)

**Note :** Everyone thinks that each device has a single MAC address but it not true.There can be more than one MAC address of a device.A device can have more than one MAC address.

## How to see MAC address on your system ?

**Windows Commands**

**1. Step 1 :** Open the command prompt

**2. Step 2 :** ipconfig /all

**MacOS/Linux Commands**

**1. Step 1 :** Open the terminal

**2. Step 2 :** ifconfig

You will see a lot of MAC address.

The ether : (MAC Address) will be your MAC address.

MAC address is a 48 bit number and we use hexadecimal number to represent it.
We ues 12 different hexadecimal number.

## How many MAC addresses a device have ?

The number of ways in which we can send/share the data to a device are the total
different MAC address that device has.
You can see it in MACbook.

- Transfer of data between smartphone and computer via USB cable.
- Transfer of data between I phone and MacBOOK via air drop (it also uses MAC address)
- Transfer of data between smart phone and computer vai LAN.
- Transfer of data between devices via bluetooth happens by using MAC address.
- Transfer of data between computer/mobile vai wifi.

Jitne bhi tarike se aap apne mobile se computer m data transfer kr skte h utne
different tarike k liye utne MAC address allocate honge.

There are more than one MAC address because there are different ways to share
data between devices.If there are x ways to share data between devices than
there are x MAC address available.

**Note :** We can also send the data via MAC address in a local area network
from one computer to another computer.So , if you want to send data in a local area network than we can send it without IP address but we need MAC address.
We send data to the switch , the switch will send data to the computer via it's
MAC address.MAC address task is to send the data.

## What is VPN ?

VPN stands for virtual private network.
