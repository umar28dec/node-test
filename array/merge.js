module.exports.mergeArray = ((arr1, arr2)=>{
    return [new Set([...arr1, ...arr2])];
});


module.exports.mergeArrayWIthFilter =((a, b)=>{
    return  a.concat(b.filter((item) => a.indexOf(item) < 0))

})
