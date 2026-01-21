# Advance DNS

## What is DNS ?

- DNS stands for domain name system.
- DNS is a server that stores the IP address of different servers.
- DNS maps the IP address of the server with the url of the website.
- DNS returns the IP address of the server.

URL IP Address Of The Server

www.google.com Google IP address

www.instagram.com Instagram IP address

## How to access a website ?

The url of a website calls the DNS server.The DNS search the IP address of the
server by using url and than returns the IP address to the browser.Browser than directly request to the server using it's IP address.

We can also request to the server directly by typing it's IP address.

Go to nslookup.io : it will give the IP address of a url or domain name.

## Why DNS maps IP address with the domain name ?

It's easier for us to remember domain name rather than IP address of the server.
The IP address of the server is in number format which is more good for computers (computer only understand numbers (binary number)).

## DNS Concept In Depth ?

When we type google.com in our browser.So it is first checked inside our browser
that kya google.com ka IP address hamare browser k andar pada hua h.If the IP
address is present in our browser than DNS won't be called.Instead browser will
directly hit request to the server using the IP address.

If IP address of google.com is not present in the browser than the request goes to the "Recursive Server"

**Note :** Recursive Server is also called as DNS Resolver.

**Recursive Server**  
it will check that does it contains the IP address of the google.com website.if yes than it will return the IP address to the browser else recursive server will call the root server.
Recursive server will call the root server that is nearest to your location.
It is also called as DNS resolver.

**Root Server**
There are only 13 root servers in the whole world.

**Note :** Root server don't store the IP address of different websites.
Root server checks the domain name of your website like .com , .edu etc and it returns the IP address of a TLD server containing information about specific
domain.
Root server checks that ki apki website kis type ki h.Root server checks that your website is of .com or .in etc.Root server checks your domain (.com , .in , .edu etc)
Root server checks the domain name of your website and returns the IP address of a specific TLD server.

If the domain name of the website is of .com than root server will return the IP address of the TLD Server containing .com domain information to the recursive server.Root server returns the IP address of a specific TLD server containing information about the specific domain name. (.com , .in , .edu)

**TLD Server**
It stands for Top Level Domain.
it is a collection of different servers where each server stores some information related to a specific domain name (.com , .in , .edu etc.)
Each TLD server stores the information of a specific domain name.
if the url of the websites ends with .com than root server will send the address of the TLD server that contains information about .com domain name to the recursive server.The recursive server will go to the TLD server.

There are multiple TLD servers that stores information related to each domain name.

For example , .com ka alag TLD server hoga and .in ka alag TLD server hoga and so on.

Each TLD server stores some information related to a specific domain name.

The TLD server don't return IP address directly.It just tells the recursive server to go to authoritative server where it will get the original IP address of the server.
TLD server returns the IP address of the authoritative server which contains the original IP address.

**Authoritative Server**
it stores the original IP address of the server.
it returns the actual IP address of the server to the recursive server.

**Step 1 :** Browsers checks IP address inside itself.

**Step 2 :** Browser --> Recursive Server (if browser don't have IP address)

**Step 3 :** Recursive Server --> Browser (if recursive server contains the IP address)

**Step 4 :** Recursive Server --> Root Server (if recursive server don't have IP address)

**Step 5 :** Root Server --> Recursive Server (root returns the address of a specific TLD server according based on the type of the domain name.)

**Step 6 :** Recursive Server --> TLD Server (Recursive server requests to the specific TLD server)

**Step 7 :** TLD Server --> Recursive Server (TLD returns IP address of authoritative server)

**Step 8 :** Recursive Server --> Authoritative Server (recursive server request to the authoritative server for IP address)

**Step 9 :** Authoritative Server --> Recursive Server (Authoritative server returns the original IP address of the server)

**Step 10 :** Recursive Server --> Browser

**Note : Recursive Server + Root Server + TLD Server + Authoritative Server together is called as DNS.**
