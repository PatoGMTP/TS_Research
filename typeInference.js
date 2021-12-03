export function typeInference() {
    let item;
    item = 5;
    item.toString();
    item = null;
    let thing = 5;
    thing.toString();
    thing = null;
    function doSomething(input = false) {
        return 5;
    }
    let int = doSomething();
    let arr = ["1", "2", "3"];
    arr.forEach(item => item.toUpperCase());
    arr.forEach(item => Math.round(item));
    let container = [0, NaN, null];
}
