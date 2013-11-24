
var http = require('http');
/*http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(3000);
*/

//More explicit
var server = http.createServer();
server.on('request', function(req,res){
	res.writeHead(200, {'content-Type': 'text/plain'});
	res.end('Hello World Explicit\n');
});
server.listen(3000);

console.log('Server running at http://localhost:3000');
