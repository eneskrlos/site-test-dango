
const buttonBack = document.querySelector(".button-back");
const buttonNext = document.querySelector(".button-next");
const carousel = document.querySelector("#carousel");
const slider = document.querySelectorAll(".slider");

const buttonBackGallery = document.querySelector(".button-back-gallery");
const buttonNextGallery = document.querySelector(".button-next-gallery");
const idSliderGallery = document.querySelector("#id-slider-gallery");
const gridListCatalog = document.querySelectorAll(".grid-list-catalog");



let ejeX = 0;
let counter = 0;
let widthSlider = 100 / slider.length

/* setInterval(() => {
    moveToRigth();
}, 5000); */

const moveToRigth = () => {
    counter++;
    if(counter >= slider.length){
        counter = 0;
        ejeX = 0;
    } else {
        ejeX = ejeX + widthSlider
    }
    carousel.style.transform = `translateX(-${ejeX}%)`;
}

const moveToLefth = () => {
    counter--;
    if(counter < 0){
        counter = slider.length - 1;
        ejeX = widthSlider * (slider.length - 1);
    } else {
        ejeX = ejeX - widthSlider
    }
    carousel.style.transform = `translateX(-${ejeX}%)`;
}

buttonBack.addEventListener("click", moveToLefth);
buttonNext.addEventListener("click", moveToRigth);


let ejeXGallery = 0;
let counterGallery = 0;
let widthSliderGallery = 100 / gridListCatalog.length



const moveToRigthGallery = () => {
    counterGallery++;
    if(counterGallery >= gridListCatalog.length){
        counterGallery = 0;
        ejeXGallery = 0;
    } else {
        ejeXGallery = ejeXGallery + widthSliderGallery
    }
    idSliderGallery.style.transform = `translateX(-${ejeXGallery}%)`;
}

const moveToLefthGallery = () => {
    counterGallery--;
    if(counterGallery < 0){
        counterGallery = gridListCatalog.length - 1;
        ejeXGallery = widthSliderGallery * (gridListCatalog.length - 1);
    } else {
        ejeXGallery = ejeXGallery - widthSliderGallery
    }
    idSliderGallery.style.transform = `translateX(-${ejeXGallery}%)`;
}

buttonBackGallery.addEventListener("click", moveToLefthGallery);
buttonNextGallery.addEventListener("click", moveToRigthGallery);

const buttomMenu = document.querySelector("#btnMenuToggle");
buttomMenu.addEventListener('click', function() {
    document.getElementById("mobile-menu").style.width = "100%"
    
});

const buttomClose = document.querySelector(".btn-close");
buttomClose.addEventListener('click', function() {
    document.getElementById("mobile-menu").style.width = "0%"
});

