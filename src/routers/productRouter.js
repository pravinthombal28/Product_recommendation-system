let express=require("express");
let productControl=require("../controllers/productControl.js");
let prodRouter=express.Router();

prodRouter.get("/saveProd",productControl.saveProduct);
prodRouter.get("/deleteProd",productControl.deleteProduct);
prodRouter.get("/updateProd",productControl.UpdateProdData);
prodRouter.get("/viewProd",productControl.getProduct);



module.exports=prodRouter;