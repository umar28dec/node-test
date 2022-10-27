module.exports.protoType = function () {

    function Umar(name) {
        this.name = name
    }

    Umar.prototype.getname = function (){
        return "Hello: " + this.name;
    }
    const obj1 = new Umar('xxx');
    const obj2 = new Umar('rrr');
console.log(obj2.prototype)
}
