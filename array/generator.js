function* uk(){
    yield 1;
    yield 12;
    yield 16;
}

const z =uk();
console.log(z.next())
console.log(z.next())
console.log(z.next())
console.log(z.next())
