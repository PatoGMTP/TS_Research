export function typeInference(terminal) {
    let tuple_topic = document.getElementById('topic3');
    tuple_topic.addEventListener('click', (event) => {
        console.log("YES");
        event.preventDefault();
        let image1 = document.getElementById('image1');
        let image2 = document.getElementById('image2');
        let image3 = document.getElementById('image3');
        console.log("here");
        let text_area = document.getElementById('text');
        text_area.innerText = 'Tuples: Allows the programmer to declare specific array contents using types';
        image1.src = 'images/tuples.png';
        image2.src = 'images/tuples.png';
        image3.src = 'images/tuples.png';
        var slides = document.getElementsByClassName("mySlides");
        slides[0].style.display = "block";
        slides[1].style.display = "none";
        slides[2].style.display = "none";
        terminal.arr.length = 0;
        terminal.arr.push(`
Topic: Type Inference!

Type inference is TS's way of guessing what type something is

let item;           // TSC assumes item is any
item = 5;           // TSC accepts
item.toString();    // TSC also accepts, as it knows item is number right now
item = null;        // TSC also accepts

let thing = 5;      // TSC knows thing should be number
thing.toString();   // Same as above, TSC knows about this method
thing = "string";       !!! ERROR !!! thing has been determined to be number!
    `);
        terminal.arr.push(`
Type inference happens in 3 key places:

Initialization (as well as during declaration!):
let thing = 5;

Specifying default value for function parameter:
function doSomething(input = false)

Returning from a function:
return 5;
    `);
        terminal.arr.push(`
Type inference also occurs in special contexts, like array methods:
    
let arr: string[] = ["1", "2", "3"];

arr.forEach(item => item.toUpperCase());    // TSC accepts
arr.forEach(item => Math.round(item));      !!! ERROR !!! TSC knows item is string!
    `);
        terminal.text_area.value = terminal.arr[0];
    });
    let item;
    item = 5;
    item.toString();
    item = null;
    let thing = 5;
    thing.toString();
    thing = "string";
    function doSomething(input = false) {
        return 5;
    }
    let int = doSomething();
    let arr = ["1", "2", "3"];
    arr.forEach(item => item.toUpperCase());
    arr.forEach(item => Math.round(item));
    let container = [0, NaN, null];
}
