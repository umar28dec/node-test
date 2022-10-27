module.exports.checkUnique = function (input){
    console.log(Object.prototype.toString.call(input))
    if(Object.prototype.toString.call(input) === "[object String]"){
        var inputArr = input.split('');
    }
    const obj = {};
    for (let i =0; i<inputArr.length; i++){
        if(obj[inputArr[i]]){
            return false;
        }else {
            obj[inputArr[i]] =true
        }

    }
     return  true;
}


module.exports.CountFrequency = function (input){
    var inputArr = input;
    if(Object.prototype.toString.call(input) === "[object String]"){
        inputArr = input.split('');
    }
    const obj = {};
    for (let i =0; i<inputArr.length; i++){
        if(obj[inputArr[i]]){
            obj[inputArr[i]] +=1;
        }else {
            obj[inputArr[i]] =1;
        }

    }
    return  obj;
}

module.exports.SortBasedOnCountFrequency = function (input){
    if(input){
        var inputArr = input;
        if(Object.prototype.toString.call(input) === "[object String]"){
            inputArr = input.split('');
        }
        const obj = {};
        for (let i =0; i<inputArr.length; i++){
            if(obj[inputArr[i]]){
                obj[inputArr[i]] +=1;
            }else {
                obj[inputArr[i]] =1;
            }

        }

        const r = inputArr.sort((a, b)=>{
            return  obj[a] - obj[b]
        })

        return  [...new Set(r)];
    }
return  {};
}


