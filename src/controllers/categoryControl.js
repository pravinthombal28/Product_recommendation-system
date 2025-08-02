let cateControl=require("../models/categoryModel.js");

exports.categorySave=(req,res)=>{
    let {category_name}=req.body;
    let promise=cateControl.saveCategory(category_name);
     promise.then((result)=>{
        res.send("savemodel data...");
    }).catch((err)=>{
        res.send("error occer"+err);
    });
}

exports.deleteCateory=(req,res)=>{
    let {category_id }=req.body;
    console.log(category_id);
    let promise=cateControl.deleteCateory(category_id);
    promise
    .then((result)=>{
        res.send("data delete success....");
    })
    .catch((err)=>{
        res.send("ereor is......");
    })
}
exports.updateCategory=(req,res)=>{
    let {category_id,category_name }=req.body;
    console.log(category_id,category_name);
    let promise=cateControl.updateCateory(category_id,category_name);
    promise
    .then((result)=>{
        res.send("data update success....");
    })
    .catch((err)=>{
        res.send("ereor is......"+err);
    })
}
exports.getCate=(req,res)=>{
     let promise=cateControl.getviewAll();
    promise
    .then((result)=>{
        res.send("data featch successfully....");
    })
    .catch((err)=>{
        res.send("data not fatch is......");
    })
}