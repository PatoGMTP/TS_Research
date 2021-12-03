var topic6 = document.getElementById('topic6');
topic6.addEventListener('click', function (event) {
    event.preventDefault();
    var text_area = document.getElementById("text");
    text_area.innerText = 'The programmer/Developer is able to creat a new name for a type. You can think of it as an interface but this can take in primitice types, unions tuples and much more !  ';
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    image1.src = 'images/TypeAliases.png';
    image2.src = 'images/logDetails.png';
    image3.src = 'images/Greetings.png';
    var slideIndex = 0;
    showSlides();
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 8000); // Change image every 2 seconds
    }
});
var user = {
    name: 'joe',
    id: 2316736
};
// With no type Aliases 
var logDetails = function (user, id) {
    console.log("Hey ".concat(user, " your id is ").concat(id));
};
// With type Aliases
var logDetailss = function (user, id) {
    console.log("Hey ".concat(user, " your id is ").concat(id));
};
//Object with no type Aliases 
var greetings = function (user) {
    console.log("Hey ".concat(user.name, " your partner numbers is US").concat(user.id));
};
var greetingss = function (user) {
    console.log("Hey ".concat(user.name, " your partner numbers is ").concat(user.id));
};
// logDetails('Joe',12345)
greetings(user);
