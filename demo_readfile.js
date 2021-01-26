var http = require('http');
var fs = require('fs');

http.createServer(function (req,res){
  fs.readFile('demoHTML_readfile.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

//it read the file in the server, named following the method, fs.readFile, which is demoHTML_readfile
//and displays it
