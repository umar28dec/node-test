module.exports.countOfNumber = function (num){
    let count =0;
    while (num != 0){
        num = parseInt(num / 10);
        count++;
    }
    return count;
}
