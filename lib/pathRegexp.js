module.exports = pathRegexp;
function pathRegexp(path){

    var paramNames = [];

    path = path.replace(/\?(.*)$/,"")

               .replace(/((\*{1}(?=\/))|(\*{1}(?=$)))/g,"(.*))")

               .replace(/(:(.*?(?=\/)))|(:(.*?(?=$)))/g,"(.*))")

               .replace(/\//g,"\\\/");

    var regexp = new RegExp("^"+path+"\\/?$");
    regexp.paramNames = paramNames;

    return regexp;
}