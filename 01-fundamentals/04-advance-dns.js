/* 
--------------------------------- Advance DNS ---------------------------------------

--> What is DNS ? 
    DNS stands for domain name system.DNS maps the IP address of the server with
    the url of the website.DNS returns the IP address of the server. 
    DNS maps the domain name with the IP address of the server. 

    URL                IP Address Of The Server 
    www.google.com      Google IP address 
    www.instagram.com   Instagram IP address 

--> How to access a website ? 
    The url of a website calls the DNS server.The DNS search the IP address of the
    server by using url and than returns the IP address to the browser.Browser 
    than directly request to the server using it's IP address. 

    We can also request to the server directly by typing it's IP address. 

    Go to nslookup.io : it will give us the different IP address of a url or 
    domain name. 

--> Why DNS maps IP address with the domain name ? 
    It's easier for us to remember domain name rather than IP address of the server. 
    The IP address of the server is in number format which is more good for 
    computers (computer only understand numbers (binary number)).

--> DNS Concept In Depth ? 
    When we type google.com in our browser.So first it is checked inside our browser
    that kya google.com ka IP address hamare browser k andar pada hua h.If the IP 
    address is present in our browser than DNS won't be called.Instead browser will
    directly hit request to the server using the IP address. 

    If IP address of google.com is not present in the browser than the request 
    goes to the "Recursive Server"
    
    Note : Recursive Server is also called as DNS Resolver. 

    Recursive Server : it will check that does it contains the IP address of the
    google.com website.if yes than it will return the IP address to the browser 
    else recursive server will call the root server. 
    Recursive server will call the root server that is nearest to your location. 

    Root Server : There are only 13 root servers in the whole world.
    Note : Root server don't store the IP address of different websites. 
    Root server checks that ki apki website kis type ki h.Root server checks
    that your website is of .com or .in etc. 
    Root server checks your domain (.com , .in , .edu etc)

    If the domain name of the website is of .com than root server will return
    the IP address of the TLD Server to the recursive server. 
    TLD server contains the IP address of all the websites whose domain name 
    is .com 

    TLD Server : it contains IP address of all the websites whose domain name is 
    .com 
    If contains IP address of all the websites whose url ends with .com 
    TLD stands for top level domain. 
    if the url of the websites ends with .com than root server will send the address
    of the TLD server to the recursive server.The recursive server will go to the
    TLD server. 

    There are multiple TLD servers that stores IP address related to each domain
    name. 
    For example , .com ka alag TLD server hoga and .in ka alag TLD server hoga 
    and so on. 
    Each TLD server stores the IP address of different websites which have common
    domain name. 
    The TLD server don't return IP address directly.It just tells the 
    recursive server to go to authoritative server where it will get the IP 
    address of the server. 

    Authoritative Server : it returns the actual IP address of the server. 

    Step 1 : Computer --> Recursive Server --> Root Server 
    Step 2 : Root Server --> Recursive Server 
    Step 3 : Recursive Server --> TLD Server
    Step 4 : TLD Server --> Recursive Server
    Step 5 : Recursive Server --> Authoritative Server
    Step 6 : Authoritative Server --> Recursive Server
    Step 7 : Recursive Server --> Computer 

*/
