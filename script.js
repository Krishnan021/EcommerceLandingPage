
let slideIndex=1;
showSlides();


function showSlides(){
    let i ;
    let slides = document.getElementsByClassName("myslides");
    if(slideIndex>slides.length){slideIndex=1}

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="block";
    slideIndex++;
    setTimeout(showSlides,5000);
}