var http = require("http");
var server = http.createServer();
server.on("request",handle);

var fs = require("fs");
var url = require("url");

function handle(request,response){

    function callback(err,data){
        if(err){
            response.statusCode = 404;
            response.write("path is not exist!");
        }else{
            response.write(data);
        }

        response.end();
    }
   var path = url2path(request.url);
   var data =  fs.readFile(__dirname+"/public"+path,callback);


}

function url2path(url_str){
    var urlObj = url.parse(url_str);
    var path = urlObj.path;
    return path;
}



server.listen(3000);

