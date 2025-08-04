let db=require("../../db.js");
exports.saveCategory=(category_name)=>{
return new Promise((resolve,reject)=>{
    db.query("insert into categories values('0',?)",[category_name],(err,result)=>{
        if(err){
            reject(err);
        }else{
            resolve(result);
        }
    })
})
}
exports.deleteCateory=(category_id)=>{
    return new Promise((resolve,reject)=>{
        db.query("delete from categories where category_id=?",[category_id],(err,result)=>{
            if(err){
                    reject(err)
            }
            else{
                    resolve(result);
            }
        })
    })
}
exports.updateCateory=(category_id,category_name)=>{
    return new Promise((resolve,reject)=>{
        db.query("update categories set category_name=? where category_id=?",[category_name,category_id],(err,result)=>{
            if(err){
                    reject(err)
            }
            else{
                    resolve(result);
            }
        })
    })
}
exports.getviewAll=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select *  from categories",(err,result)=>{
            if(err){
                    reject(err)
            }
            else{
                    resolve(result);
            }
        })
    })
}