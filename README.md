
***
# jquery.hostInfo.js Usage #
Just execution $.getHostInformation and will return type object.<br/>
The object will contain following information.<br/>          

*    href: Returns the entire URL 
*    hash: Returns the anchor part (#) of a URL
*    host: Returns the hostname and port number of a URL
*    hostname: Returns the hostname of a URL
*    origin: Returns the protocol, hostname and port number of a URL
*    pathname: Returns the path name of a URL
*    port: Returns the port number of a URL
*    protocol: Returns the protocol of a URL
*    query:  Returns the querystring part of a URL
<br/>
Usage 1 :<br/>
`
var info = $.getHostInformation();
alert(info.hostname);
`
<br/>Usage 2 :<br/>
`
var info = $.getHostInformation('http://google.com);
alert(info.hostname);
`
