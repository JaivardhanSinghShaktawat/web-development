# PORT Number

## What is PORT Number ?

Each and every running application has a PORT number.PORT number helps OS
to distinguish between different running applications to send data.

Request and response both contains the IP address , MAC address and PORT number of both sender and receiver.

Even when we open different tabs in chrome and we visit different websites than each tab has a new PORT number.

PORT number simply helps operating system to decide that kis application ko
data bhejna h when the data comes to the computer via network card.

## How we can identify a device uniquely ?

By using IP address , MAC address we can identify a device uniquely.

## Structure Of A Request

SIP | SMAC | SPORT | Request | RIP | RMAC | RPORT

## Structure Of A Response

SIP | SMAC | SPORT | Response/data | RIP | RMAC | RPORT

```
SIP : sender IP address.
SMAC : sender MAC address.
SPORT : sender PORT number.
Request : type of the request (kya request kiya h).
RIP : receiver IP address.
RMAC : receiver MAC address.
RPORT : receiver PORT number.
```

## PORT number

It is of size 16 bit.It is unsigned integer.

It means PORT Number is a positive number.

Range : 0 to 2<sup>16</sup>-1

There are total of 2^16 or 65,536 different port numbers.

Highest Port Number : 2^16-1 or 65,535

Range : 0 to 65535

## Types Of PORT Number

1. Well Known PORT Numbers
2. Registered PORT Numbers
3. Public PORT Numbers

## Well Known PORTS / Reserved PORTS (0-1023)

**Protocol Port Number**

```
http : 80
https : 443
dns : 53
smtp : 25
ssh : 22
ftp : 21
```

Registered PORTS (1024 - 49,151)

We cannot use registered ports and they cannot be used publicly.

## Well-Know Ports (0-1023)

They are the VIP of the port world.

## Registered Port Numbers (1024 - 49,151)

These are the registered port number like postgresql uses 5432 as it's PORT Number.
MYSQL uses 3306 as it's PORT number.

27017 : used by MongoDB database.

## Public/Dynamic PORTS (49,152 - 65,535)

When we request to any website or open any tab than a random dynamic PORT is allocated between 49,152 and 65,535.
Each time we open a tab and visit a website than a dynamic PORT between 49,152 and 65,535 is allocated and sent with the request.

A request/response contains IP address , MAC address and a PORT number of sender and receiver.

If we are making an http request than 80 port number is allocated.

If we are making an https request than 443 port number is allocated.

## HTTP VS HTTPS

**HTTP :** it is used for communication between client and the server.
It stands for HyperText Transfer Protocol.
It is not secure and anyone can read the data during communication.The data is in binary format so anyone can read it.

**HTTPS :** It is more secure.It is updated version of HTTP.
It stands for HyperText Transfer Protocol Secure.
Here the data is first encrypted and than it is decrypted.
