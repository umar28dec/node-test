

let list = {
    value: 1,
    next: {
        value: 2,
        next:
            {
                value: 3,
                next:
                    {
                        value: 4,
                        next:
                            {
                                value:2,
                                next:null
                            }
                    }
            }
    }
};
const arr =[]
function printList(list) {
    if(!list){
        return [];
    }
    arr.push(list.value);
    if(list.hasOwnProperty('next')){
        printList(list.next)
    }
    return  arr;
}
console.log(printList(list));

function printList1({value, next}){
    return [value,...(next ? printList1(next) : [])]
}

console.log(printList1(list));
