var tuple_topic = document.getElementById('topic5');
tuple_topic.addEventListener('click', function (event) {
    console.log("YES");
    event.preventDefault();
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    console.log("here");
    var text_area = document.getElementById('text');
    text_area.innerText = 'Tuples: Allows the programmer to declare specific array contents using types';
    image1.src = 'images/tuples.png';
    image2.src = 'images/tuples.png';
    image3.src = 'images/tuples.png';
    var slides = document.getElementsByClassName("mySlides");
    slides[0].style.display = "block";
});
var tuple = ["Hello there", 123];
tuple[0].length;
tuple[1].toString();
tuple[1].length; // Error! TSC knows this is a number, which doesn't have a .length
tuple.push("Yes", 1); // This input is accepted, but this is actually a weakness of tuples
console.log(tuple[2]); // Notice the error, TSC think "tuple" only has two items inside it
tuple.push("Test1"); // We can continue to add more items, and TSC will not complain
tuple.push("Test2"); // However, TSC will always think "tuple" only has two items inside it.
tuple.push(123);
tuple.push(124);
console.log(tuple);
