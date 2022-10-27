
const promisAll = function (promisses){
     let count =0;
     let result = [];
     return new Promise((resolve, reject)=>{
          promisses.forEach((value, index)=>{
             value.then((value)=>{
                    result[index] = value;
                  count+=1;
                  if(count == promisses.length){
                       resolve(result)
                  }
             }).catch((error)=>{
                    reject(error);
             })
          })
     })
}

const ascOperation = function (time1){
     return new Promise((resolve, reject)=>{
          setTimeout(()=>{
               resolve(time1);
          }, time1);
     })
}

promisAll([ascOperation(1000), ascOperation(3000)]).then((data)=>{
     console.log(data)
})
