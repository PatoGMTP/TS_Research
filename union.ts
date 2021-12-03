
let topic4 = document.getElementById('topic4') as HTMLElement


topic4.addEventListener('click', (event) => {
    event.preventDefault()
    let image1 = document.getElementById('image1') as HTMLImageElement;
    let image2 = document.getElementById('image2') as HTMLImageElement;
    let image3 = document.getElementById('image3') as HTMLImageElement;
    console.log("here")
    let text_area = document.getElementById('text') as HTMLElement;
    text_area.innerText = 'Union Types: Allows the programmer to use more than one data type for a variable '
    image1.src = 'images/Union.png';
    image2.src = 'images/UnionOk.png';
    image3.src = 'images/NotOkUnion.png';

    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 8000); // Change image every 2 seconds
    }

})


// Ok Use of Union 
let unions: (string | number | boolean);
unions = 10161990;
unions = "ABC";
unions = false;

// console.log(unions)

//Not ok to use union 
let notUnion: (number | string);
notUnion = 'Team Name ';
// notUnion = true ;  // Compiler Error since the type isn't defined
notUnion = 12 / 2 / 2021

