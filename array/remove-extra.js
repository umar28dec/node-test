var arr = "    umar     khan"

function removeAllspace(str){
    return str.split(" ").join('');
}
console.log(removeAllspace(arr));


function removeExtraSpace(str){
    const x = str.split(" ");
    const y= x.filter((value)=>{
        return value;
    })
    return y.join(' ');
}
console.log(removeExtraSpace(arr));
