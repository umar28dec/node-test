let squire = (a)=>a*a;
let add = (a, b)=> a+b;
let sub = (a, b) =>{
    return a+b;
}
let x =(a)=> {
    return `umar ${a}\n khan`;
}
// console.log(x(3))

const largestNumberInArray = (arr)=>{
    let max = arr[0];
    arr.forEach((value)=>{
        if(value > max){
            max = value;
        }
    })
    return max;
}
// console.log(largestNumberInArray([100, 3,6, 0, -6, 9]))


const  w =()=>{
    console.log(this)
}
w();
