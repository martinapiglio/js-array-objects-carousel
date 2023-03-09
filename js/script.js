// VARIABLES:
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const activeImg = document.getElementById('active-img');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');

const thumbnailContainer = document.getElementById('thumbnails');

let index = 0;

//SET IMG SRC EQUAL TO FIRST IMG FROM THE ARRAY:
activeImg.src = images[index].image;

//INSERT TITLE + DESC
let descContainer = document.getElementById('desc-container');

let titleContainer = document.createElement('div');
let textContainer = document.createElement('div');

titleContainer.innerHTML=images[index].title;
textContainer.innerHTML=images[index].text;

titleContainer.classList.add('title');

descContainer.append(titleContainer);
descContainer.append(textContainer);

//CREATE THUMBNAILS
for (let i = 0; i < images.length; i++) {

    let newThumbnail = document.createElement('img');

    newThumbnail.src = images[i].image;
    newThumbnail.style.height = "calc(100% / " + images.length + ")";

    newThumbnail.classList.add("thumbnail");

    thumbnailContainer.append(newThumbnail);

}

const thumbnailEl = document.querySelectorAll('.container #thumbnails .thumbnail');

thumbnailEl[index].classList.add("active");

//ARROW CLICK UP
arrowDown.addEventListener("click", changeActiveImg);

//ARROW CLICK DOWN
arrowUp.addEventListener("click", changeActiveImgReverse);

//BONUS 2    
//startAutoplay();

//BONUS 3 
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const reverseButton = document.getElementById('reverse-button');

startButton.addEventListener('click', startAutoplay);
stopButton.addEventListener('click', stopAutoplay);
reverseButton.addEventListener('click', startAutoplayReverse);



//FUNCTIONS---------------------------
function changeActiveImg() {
 
    thumbnailEl[index].classList.remove("active");

    if (index < images.length - 1) {

        index++;

    } else {

        index = 0;

    };

    activeImg.src = images[index].image;
    titleContainer.innerHTML=images[index].title;
    textContainer.innerHTML=images[index].text;

    thumbnailEl[index].classList.add("active");

};

function changeActiveImgReverse() {

    thumbnailEl[index].classList.remove("active");

    if (index > 0) {

        index--;

    } else {

        index = images.length - 1 ;

    };

    activeImg.src = images[index].image;
    titleContainer.innerHTML=images[index].title;
    textContainer.innerHTML=images[index].text;

    thumbnailEl[index].classList.add("active");

}

let autoPlay;

function startAutoplay() {
    autoPlay = setInterval(changeActiveImg, 3000)
};
  
function stopAutoplay() {
    clearInterval(autoPlay);
};
  
let autoPlayReverse;

function startAutoplayReverse() {
    autoPlayReverse = setInterval(changeActiveImgReverse, 3000)
};