var fk = require("../../"),
    App = fk.App,
    app = new App(),
    static_middle = fk.static;

    app.use(static_middle(__dirname+"/public"));

	app.get("/about",function(req,res){
	   res.write("my name is leo!");
	   res.end();
	});


    app.post("/contact",function(req,res){
		res.write("contact me us QQ 534591395!");
		res.end();
	});
 

app.listen(3000,function(){
  console.log("listen 3000 start ...");
});
