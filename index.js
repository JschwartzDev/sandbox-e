let header = document.getElementById("header");
let body = document.getElementsByTagName("body");
let aside = document.getElementById("navAside");
let controlPanel = document.getElementById("controlPanel");
let main = document.getElementById("main");
let footer = document.getElementById("footer");

let subDivs = main.children;

let newArr = Array.from(subDivs);

let homeBtn = document.getElementById('home-btn');
let aboutBtn = document.getElementById('about-btn');
let bioBtn = document.getElementById('bio-btn');
let contactBtn = document.getElementById('contact-btn');
let infoBtn = document.getElementById('info-btn');
let settingsBtn = document.getElementById('settings-btn');

homeBtn.addEventListener('click', () => {
   let homeDiv = document.getElementById('home-div');
   homeDiv.classList.value = 'shown';

   newArr.forEach(el => {
       let id = el.getAttribute('id');

       if(id != 'home-div'){
           el.classList.value = 'hidden';
       }
   })

} );

aboutBtn.addEventListener('click', () => {
    let aboutDiv = document.getElementById('about-div');
    aboutDiv.classList.value = 'shown';
 
    newArr.forEach(el => {
        let id = el.getAttribute('id');
 
        if(id != 'about-div'){
            el.classList.value = 'hidden';
        }
    })
 
 } );

 bioBtn.addEventListener('click', () => {
    let bioDiv = document.getElementById('bio-div');
    bioDiv.classList.value = 'shown';
 
    newArr.forEach(el => {
        let id = el.getAttribute('id');
 
        if(id != 'bio-div'){
            el.classList.value = 'hidden';
        }
    })
 
 } );

 contactBtn.addEventListener('click', () => {
    let contactDiv = document.getElementById('contact-div');
    contactDiv.classList.value = 'shown';
 
    newArr.forEach(el => {
        let id = el.getAttribute('id');
 
        if(id != 'contact-div'){
            el.classList.value = 'hidden';
        }
    })
 
 } );
 
 infoBtn.addEventListener('click', () => {
    let infoDiv = document.getElementById('info-div');
    infoDiv.classList.value = 'shown';
 
    newArr.forEach(el => {
        let id = el.getAttribute('id');
 
        if(id != 'info-div'){
            el.classList.value = 'hidden';
        }
    })
 
 } );

settingsBtn.addEventListener('click', () => {
    let settingsDiv = document.getElementById('settings-div');
    settingsDiv.classList.value = 'shown';
 
    newArr.forEach(el => {
        let id = el.getAttribute('id');
 
        if(id != 'settings-div'){
            el.classList.value = 'hidden';
        }
    })
 
 } );
 
 
 
 



