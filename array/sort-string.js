const name ="umar farooque khan"
function sortStr(name){
    const str = name.split('');
    const len = str.length;
    for (let i= 0; i < len ; i++){
        for (let j= i+1; j < len ; j++){
            if(str[i] > str[j]){
                let temp = str[i];
                str[i] = str[j];
                str[j] = temp;
            }
        }
    }
    return str.join('');
}

console.log(sortStr(name))
