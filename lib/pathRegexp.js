module.exports = pathRegexp;
function pathRegexp(path){
    path = path.replace(/\?(.*)$/,"")

               .replace(/((\*{1}(?=\/))|(\*{1}(?=$)))/g,"(.*))")

               .replace(/(:(.*?(?=\/)))|(:(.*?(?=$)))/g,"(.*))")

               .replace(/\//g,"\\\/");
    return new RegExp("^"+path+"$");
}