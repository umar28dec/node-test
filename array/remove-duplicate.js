
//using map and include
function removeDuplicate1(arr){
    const result = [];
    arr.map((value, index, array)=>{
        if(!result.includes(value)){
            result.push(value)
        }
    })
    return result
}
const arr = [100, 1, 3, 4, 1, 6, 4];
console.log(removeDuplicate1(arr));


//using foreach
function removeDuplicate2(arr){
const result = []
    arr.forEach((value, index, array)=>{
        if(!result.includes(value)){
            result.push(value)
        }
    })
    return result;

}
const arr2 = [100, 10, 30, 40, 10, 6, 4];
console.log(removeDuplicate2(arr2));


//using for
function removeDuplicate3(arr){
    const result = []
    for (let i=0; i < arr.let; i++ ){
        if(!arr.indexOf(arr[i]) > -1){
            result.push(arr[i])
        }
    }
    return result;

}
// const arr3 = ['a', 'v', 'c', 'v', 'a', 'p'];
// console.log(removeDuplicate2(arr3));


function removeDuplicate4(arr){
    let obj = {};
    for (let i of arr){
        obj.i = true;
    }
    return Object.keys(obj);
}
// const arr4 = ['A', 'v', 'c', 'v', 'a', 'p'];
// console.log(removeDuplicate2(arr4));
