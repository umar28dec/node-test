module.exports.sumOfDigits = (num)=>{
    let sum =0
    while (num !=0){
        sum+=num % 10;
        num =parseInt(num /10);
    }
    return sum;
}

module.exports.orderByWeight = (arr)=>{
    return arr.sort((a, b)=>{
        return exports.sumOfDigits(b)  - exports.sumOfDigits(a)
    })

}
