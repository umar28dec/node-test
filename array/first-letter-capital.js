var str = "umar khan";
function convertIntofirstUpper(str){
    const arr = str.split(' ');
    const r = arr.map((value)=>{
        return value[0].toUpperCase() + value.slice(1);
    })
    return r.join(' ');
}

console.log(convertIntofirstUpper(str));
