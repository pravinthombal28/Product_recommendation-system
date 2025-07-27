let express=require("express");
let bodyparser=require("body-parser");
let db=require("./db.js");
//let router=require("./src/middleware");
require("dotenv").config();
let app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs");

app.get("/", (req, res) => {
  res.render("login.ejs");
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
 console.log(email,password);
});

app.listen(process.env.server_port,()=>{
    console.log("server started successful....");
})