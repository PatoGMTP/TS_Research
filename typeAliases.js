export function typeAliases(terminal) {
    let topic6 = document.getElementById('topic6');
    topic6.addEventListener('click', (event) => {
        event.preventDefault();
        let text_area = document.getElementById("text");
        text_area.innerText = 'The programmer/Developer is able to creat a new name for a type. You can think of it as an interface but this can take in primitice types, unions tuples and much more !  ';
        let image1 = document.getElementById('image1');
        let image2 = document.getElementById('image2');
        let image3 = document.getElementById('image3');
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
    let user = {
        name: 'joe',
        id: 2316736,
    };
    // With no type Aliases 
    const logDetails = (user, id) => {
        console.log(`Hey ${user} your id is ${id}`);
    };
    // With type Aliases
    const logDetailss = (user, id) => {
        console.log(`Hey ${user} your id is ${id}`);
    };
    //Object with no type Aliases 
    const greetings = (user) => {
        console.log(`Hey ${user.name} your partner numbers is US${user.id}`);
    };
    const greetingss = (user) => {
        console.log(`Hey ${user.name} your partner numbers is ${user.id}`);
    };
    // logDetails('Joe',12345)
    greetings(user);
}
