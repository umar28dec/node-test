function calculate(){
    let sum =0;
    for (let i =0; i < 1e9; i++){
        sum+=i;
    }

    return sum;
}
process.on('message', (message)=>{
    console.log(message)
    if(message =='start'){
    const sum = calculate();
    process.send(sum);

}

})
