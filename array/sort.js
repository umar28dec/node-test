module.exports.shortArray = function (input){
    let sorted = input.sort((a, b)=> {
        if (a > b) {
            return -1;
        } else if (a < b){
            return 1;
        }else {
            return 0
        }

    })
    return sorted;
}


module.exports.shortArray1 = function (input){
    let sorted = input.sort((a, b)=> {
        return b-a;
    })
    return sorted;
}


module.exports.shortString = function (input){
    return input.sort();
}

// const str =[
//     {name:'Umar', age :22, id:1},
//     {name:'Khan', age :22, id:5},
//     {name:'Faiz', age :14, id:2},
//     {name:'Uk', age :28, id:3},
//     {name:'Aayat', age :2, id:6},
//     {name:'Sana', age :16, id:4},
// ]

module.exports.shortObject = function (input){
    return input.sort((a, b)=>{
                if(a.id > b.id) return 1;
                else if (a.id < b.id) return -1;
                else  return 0;
    });
}

