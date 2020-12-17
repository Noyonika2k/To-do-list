const express = require("express");
const app = express();
app.set("view engine","ejs");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var items=[];
var workItems=[];

app.get("/", function(req, res) {

  var d = new Date();

var options={
  weekday:"long",
  day:"numeric",
  month:"long"
};

var day=d.toLocaleDateString("en-us",options);

res.render("index",{listTitle:day,newItems:items });

});

app.get("/work", function(req, res){

  res.render("index",{listTitle:"work",newItems:workItems });

});


app.post("/",function(req,res){
var item=req.body.item;
if(req.body.list==="work"){
  workItems.push(item);
   res.redirect("/work");
}
  else{

    items.push(item);
   res.redirect("/");
 }

});


app.listen( 3000, function() {
  console.log("Server is running at 3000");
});
