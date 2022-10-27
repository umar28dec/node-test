const str ="umar farooque khan"
function counCharcter(str){
    const vowel = ['a', 'e', 'o', 'i', 'u'];
    const result ={
        total:0,
        vowel:0,
        consonant:0
    };
    for (const value of str) {
        if(value.includes(value)){
            result.vowel+=1;
        }else {
            result.consonant+=1;
        }
        result.total+=1;
    }

    return result
}

console.log(counCharcter(str))
