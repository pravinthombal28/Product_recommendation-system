let db=require("../../db.js");

exports.saveProdData=(name,description,price,image_url,category_id)=>{
    return new Promise((resolve,reject)=>{
        db.query("insert into products values('0',?,?,?,?,?)",[name,description,price,image_url,category_id],(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })   
}
exports.deleteProdData=(product_id)=>{
    return new Promise((resolve,reject)=>{
        db.query("delete from products where product_id=?",[product_id],(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}
exports.UpdateProdData=(name,description,price,image_url,category_id,product_id)=>{
    return new Promise((resolve,reject)=>{
        db.query("update products set name=?,description=?,price=?,image_url=?,category_id=? where product_id=?",[name,description,price,image_url,category_id,product_id],(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}
exports.viewAllProd=()=>{
     return new Promise((resolve,reject)=>{
        db.query("select *from products",(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
     });
}