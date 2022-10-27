var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I was instantiated at");

        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
    };q
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log(instance1 === instance1);
console.log(instance2);


