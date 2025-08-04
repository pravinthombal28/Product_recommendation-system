let express=require("express");
let cateRouter=require("../controllers/categoryControl.js");
let C_router=express.Router();

C_router.get("/catesave",cateRouter.categorySave);
C_router.get("/deletecate",cateRouter.deleteCateory);
C_router.get("/updatecate",cateRouter.updateCategory);
C_router.get("/viewCate",cateRouter.getCate);


module.exports=C_router;