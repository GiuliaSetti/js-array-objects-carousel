// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


// console.log("prova sa sa")


// copio e incollo l'array images
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


// test
// console.log(images);


// memorizzo l'elemento HTML contentente le slides
const slideContainerEl = document.getElementById("slides_container");

// memorizzo l'elemento HTML dell'immagine
const imageSlide = document.getElementById("image_slide");

// memorizzo i bottoni before e after
const beforeButton = document.getElementById("before");
const afterButton = document.getElementById("after");

// inserisco un contatore per gli index delle immagini
let counter = 0;

// creo un elemento che contenga titolo e testo
const slideDescription = document.createElement("div");
slideContainerEl.append(slideDescription);
slideDescription.classList.add("info_container");

// creo due elementi che contengano titolo e descrizione dell'immagine
const slideTitle = document.createElement("h3");
slideDescription.append(slideTitle);


const slideText = document.createElement("p");
slideDescription.append(slideText);

// memorizzo l'elemento HTML che indica le miniature
const thumbnailsEl = document.getElementById("thumbnails");



// memorizzo i bottoni 
const startButton = document.getElementById("start");

const reverseButton = document.getElementById("reverse");

const stopButton = document.getElementById("stop");


// riporto funzione al click giù
afterButton.addEventListener("click", afterButtonClick);


// riporto funzione al click su
beforeButton.addEventListener("click", beforeButtonClick);

// immagine a conteggio 0
showImage(counter);


// bonus 1 e 2

// mostro le thumbnails
showThumb(images);

const thumbnailArray = document.querySelectorAll('.thumbnail');

thumbnailArray[counter].classList.add("active");

// cancello il timer e lo metto in una funzione per attivarl al click
startButton.addEventListener("click", startAutoPlay)





// FUNCTIONS____________________________

// funzione per lo scorrimetno delle foto automatico
function startAutoPlay() {
    showImage(counter);
    setInterval(afterButtonClick,3000);
}
  



// funzione per le thumbnails
function showThumb(array){
    for (let i = 0; i < array.length; i++) {
    
        let thumbImage = document.createElement('img');
    
        thumbImage.src = images[i].image;
        thumbImage.style.height = "calc(100% / " + images.length + ")";
    
        thumbImage.classList.add("thumbnail");
    
        thumbnailsEl.append(thumbImage);

        // aggiungo la classe active al click dell'immagine
        
        thumbImage.addEventListener('click', function() {
            thumbnailArray[counter].classList.remove("active");

            counter = i;
            showImage(counter);

            thumbnailArray[i].classList.add("active");
        });
    
    }

}

// funzione che mostra l'immagine
function showImage(i){
       
    slideTitle.innerHTML = `${images[i].title}`;
    
    slideText.innerHTML = `${images[i].text}`;
    
    imageSlide.src = images[i].image;

}

// funzione per il bottone giù
function afterButtonClick(){

    thumbnailArray[counter].classList.remove("active");

    if(counter == images.length - 1){

        counter = 0;

    } else {
       
        counter++;


    }

    showImage(counter);

    thumbnailArray[counter].classList.add("active");
}

// funzione per il bottone su
function beforeButtonClick(){

    thumbnailArray[counter].classList.remove("active");
   
    if (counter == 0){

        counter = images.length - 1;

    } else {


        counter--;
        

    }

    showImage(counter);

    thumbnailArray[counter].classList.add("active");
}
