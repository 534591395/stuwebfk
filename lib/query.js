var url = require("url"),
    qs = require("querystring");

function query(req,res,next){
    var querystring = url.parse(req.url).query;
    //判断是否有参数
    if(querystring){
        var queryObj = qs.parse(querystring);
        req.query = queryObj;
    }

    next();
}

module.exports = query;