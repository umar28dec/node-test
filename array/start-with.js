const str ="umar farooque khan"
function stratWith1(str, start){
    const len = str.split('').length;
    if(start == str[0]){
        return true
    }
    return false
}

console.log(stratWith1(str, 'u'))
