
const array1 = [
    {
        id: 1,
        name: "bla",
        children: [
            {
                id: 23,
                name: "bla",
                children: [{ id: 88, name: "bla" }, { id: 99, name: "bla" }]
            },
            { id: 43, name: "bla" },
            {
                id: 45,
                name: "bla",
                children: [{ id: 43, name: "bla" }, { id: 46, name: "bla" }]
            }
        ]
    },
    {
        id: 12,
        name: "bla",
        children: [
            {
                id: 232,
                name: "bla",
                children: [{ id: 848, name: "bla" }, { id: 959, name: "bla" }]
            },
            { id: 433, name: "bla" },
            {
                id: 445,
                name: "bla",
                children: [
                    { id: 443, name: "bla" },
                    {
                        id: 456,
                        name: "bla",
                        children: [
                            {
                                id: 97,
                                name: "bla"
                            },
                            {
                                id: 56,
                                name: "bla"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 15,
        name: "bla",
        children: [
            {
                id: 263,
                name: "bla",
                children: [{ id: 868, name: "bla" }, { id: 979, name: "bla" }]
            },
            { id: 483, name: "bla" },
            {
                id: 445,
                name: "bla",
                children: [{ id: 423, name: "bla" }, { id: 436, name: "bla" }]
            }
        ]
    }
];

const arr = [];
function printList1(list){
    console.log(!list)
    if(!list){
        return [];
    }
    let data= {}
    data.id =list.id
    data.name =list.name
    arr.push(data)

    if(list.hasOwnProperty('children')){
        list.children.forEach((value)=>{
            console.log(value)
            printList1(value);
        })
    }
    return; arr;
}
console.log(printList1(array1))
