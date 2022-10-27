module.exports.traveseArray = function (arr){
  for (let i=0; i < arr.length; i++){
      for (let j=0; j < arr[i].length; j++){
          console.log(arr[i][j])
      }
  }
}


module.exports.traveseArrayForin = function (arr){
    for (let i in arr){
        for (let j in arr[i]){
            console.log(arr[i][j])
        }
    }
}
