module.exports.convertCase = function (str){
    let value = str.charCodeAt();
    if(value == 32){
     return " ";
    }else if(exports.checkUpperCase(str)){
        value+= 32;
    }else {
        value-= 32
    }
    return String.fromCharCode(value)
}


module.exports.checkUpperCase = function (char){
    const value = char.charCodeAt();
    if(value >= 65 && value <= 90){
        return  true;
    }
    return false;
}

module.exports.convertCaseArray = (arr)=>{
    arr = arr.split('')
        const r=arr.map((value)=>{
            if(value){
                return exports.convertCase(value)
            }else {
                return "";
            }
        })

    return r.join('');
}
