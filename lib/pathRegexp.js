module.exports = pathRegexp;
function pathRegexp(path){

    var paramNames = [];



    path = path

               .replace(/((\*{1}(?=\/))|(\*{1}(?=$)))/g,"[0-9a-zA-Z\-_]*")

               .replace(/(:(.*?(?=\/)))|(:(.*?(?=$)))/g,function(){
                //var args = Array.prototype.slice.call(arguments,0);
                var len = arguments.length-3;
                for(var i= 0;i<len;i++){
                    var avg = arguments[i+1];

                    if(typeof avg ==="string" && avg[0] !==":"){
                        paramNames.push(avg);
                    }

                }
                return "([0-9a-zA-Z\-_]*)"

               })
               .replace(/\/$/g,"")
               .replace(/\//g,"\\\/");

    var regexp = new RegExp("^"+path+"\\/?$");
    regexp.paramNames = paramNames;



    return regexp;
}