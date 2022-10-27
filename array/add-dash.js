module.exports.adddash =((num)=>{
    const str = num.toString();
    const result =[str[0]];
    for (let i =0; i < str.length; i++){
        if((str[i] % 2 === 0) && (str[i+1] % 2 === 0)){
            result.push('-' + str[i+1]);
        }else{
            result.push(str[i+1]);
        }
    }
    return result.join('');

})
