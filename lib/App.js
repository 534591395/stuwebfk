var http = require("http");
module.exports = App;

function App(){
    //插件有序列表
    var middleList = this._middleList = [];

    //request 事件响应函数
    function handle(req,res){

        if(middleList.length === 0){

        }else{

            //循环执行插件
            var middleIndex = 0; //插件索引

            execMiddle();


            function next(){
                middleIndex += 1;
                execMiddle();
            }

            function execMiddle(){
                var middle = middleList[middleIndex];
                if(middle){
                    middle(req,res,next);
                }
            }
        }
    }

    this._server = http.createServer(handle);

}

//加入功能栈
App.prototype.use = function(middle){
    this._middleList.push(middle);
}

//监听端口
App.prototype.listen = function(){
    this._server.listen.apply(this._server,arguments);
}
