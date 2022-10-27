var ar= [2, 5]
Array.prototype.MyMap = function (callback){
    const resultArray = [];
    for(let i =0; i < this.length; i++){
        resultArray.push(callback("", this[i], i, this))
    }
    return resultArray;
}

let x1=ar.MyMap((err, data, index, arra)=>{
    if(!err){
        return 2* data;
    }
    console.error(err)
})
console.log(x1);

