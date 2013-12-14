var http = require("http");
var server = http.createServer(); //
server.on("request",handle);

function handle(request,response){
  response.write("<b>Hello world</b>");
  response.end();
}

server.listen(3000);

