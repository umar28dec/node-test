const timeout = (t)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(t ===1000){
                reject("some error");
            }else {
                resolve(t);
            }
        },t);
    })
}

// timeout(1000).then((data)=>{
//     console.log("data", data);
// }).catch((reason)=>{
//     console.log("catch", reason);
// }).finally(()=>{
//     console.log("finally");
// }).then((data)=>{
//     console.log("finally ka bap");
// })


Promise.allSettled([timeout(100), timeout(1000), timeout(100)]).then((data)=>{
    console.log("data",data)
}).catch((reason)=>{
    console.log("reason",reason)
})

function myFunction() {
    console.log(this);
}
// Simple invocation
myFunction();
