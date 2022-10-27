const x = [
    {
        name:'Umar',
        age:18
    },
    {
        name:'uk',
        age:30
    },
    {
        name:'Ayat',
        age:2
    },
    {
        name:'faiz',
        age:10
    },
    {
        name:'Umar1',
        age:30
    },
    {
        name:'nk',
        age:46
    },
    {
        name:'Khanam',
        age:30
    },
    {
        name:'faizi',
        age:5
    },

]


const groupByAge = (arr)=>{
    let temp = [];
    arr.forEach((value, index)=>{
        if(temp['x'+value.age] === undefined){
            temp['x'+value.age] = [value.name];
        }else{
            temp['x'+value.age].push(value.name)
        }
    })
    return temp;
}

console.log(groupByAge(x))

