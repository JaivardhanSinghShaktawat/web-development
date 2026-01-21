# IPV4 Vs IPV6

## IPV4 Vs IPV6 And Their Format

IPV4 and IPV6 are formats of IP address.

## IPV4

it uses 4 symbols.It is of 32 bit.

Ex : 12.34.9.8

Range Of IP Address : 0.0.0.0 --> 255.255.255.255

Total IP Address : 2^32 ~= 4.3 Billion IP address

We can allocate IP addresses to 430 crores different devices at the same time.

Format : _._._._

Each underscore is of size 8 bit because the range of underscore is 0 to 255 which is
of total 256 digits.

```
The range of _ is [0,255]
```

## Why 2^32 bit ?

- Format of IP address : _._._._

- Each group/underscore is of 8 bit

- Total we have 32 bit.

- Total we have 32 bit.

- In each bit , we have two options 0 or 1.

- So , total options we have are 2^32.

There are more than 15,000 crores devices.But with the help of IPV4 we can
give a total of 430 crores different IP address at the same time.
Since there are more devices and less IP address so we need more IP addressess.
That's why the need of IPV6 came.

## IPV6

- it uses 8 symbol.

- Each symbol is a hexadecimal number separated by :

- It is of size 128bit.

- Total IP address that we can generate via IPV6 are 2^128 IP addressess.

- It uses hexadecimal format to write IP address.

- Each value is separated by :

## Why 128 bit is used and not 64 bit ?

Scientist thought that the range 2^64 different IP address will be exceeded
after some time.So they took a bigger number so that we can allocate a large
amount of IP address even if the devices increases a lot.
Scientist thought for 500 years.For 500 years the range of new devices won't
exceed the range 2^128.

2^128 = 340 undecillion

## Why IPV6 came ?

With the help of IPV4 we can allocate IP address to only 430 crores devices only
at a single time.
But the number of devices has increased and there are around more than 15,000
crores different IP address.

To solve this problem , IPV6 came into picture.

a:a:a:a:a:a:a:a

Each a is of size 16 bits because each a is of hexadecimal type.

Total size of IPV6 = number of places * size of one place = 8*16 ==> 128bit

a : hexadecimal value
