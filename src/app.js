let express=require("express");
let bodyparser=require("body-parser");
let db=require("../db.js");
let router=require("./routers/userrouter.js");
let categoryrouter=require("./routers/categoryRout.js");
let productControl=require("./routers/productRouter.js");

require("dotenv").config();
let app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs");
app.use(express.json());

app.use("/",router);
app.use("/",categoryrouter);
app.use("/",productControl);


module.exports=app;
