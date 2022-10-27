module.exports.mostFrequent = function (arr){
    let result = {};
    for (let i =0; i < arr.length; i++){
        if(!result[arr[i]]) result[arr[i]]=1;
        else result[arr[i]] +=1;
    }

    const r= arr.sort((a, b)=>{
        return result[b] - result[a];
    })
    return [...new Set(r)][0];
}
