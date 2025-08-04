let prodModel=require("../models/productModel.js");

exports.saveProduct=(req,res)=>{
    let {name,description,price,image_url,category_id}=req.body;
    console.log(name,description,price,image_url,category_id);
    let promise=prodModel.saveProdData(name,description,price,image_url,category_id);
    promise
    .then((result)=>{
        res.send("insert product data successfully...");
    })
    .catch((err)=>{
        res.send("Product data not save....");
    })
}
exports.deleteProduct=(req,res)=>{
    let{product_id}=req.body;
    let promise=prodModel.deleteProdData(product_id);
    promise
    .then((result)=>{
        res.send("product delete successfully....");
    })
    .catch((err)=>{
        res.send("product not delete..");
    })
}
exports.UpdateProdData=(req,res)=>{
    let{name,description,price,image_url,category_id,product_id}=req.body;
    let promise=prodModel.UpdateProdData(name,description,price,image_url,category_id,product_id);
    promise 
    .then((result)=>{
        res.send("prodcut data update successfully......");
    })
    .catch((err)=>{
        res.send("product data not update...");
    })
}
exports.getProduct=(req,res)=>{
    let promise=prodModel.viewAllProd();
    promise 
    .then((result)=>{
        res.send("fatch data successfully......");
    })
    .catch((err)=>{
        res.send("Data not fatch...");
    })
}