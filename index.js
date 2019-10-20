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
let formBtn = document.getElementById('form-btn');

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

formBtn.addEventListener('click', () => {
    let formDiv = document.getElementById('form-div');
    formDiv.classList.value = 'shown';
 
    newArr.forEach(el => {
        let id = el.getAttribute('id');
 
        if(id != 'form-div'){
            el.classList.value = 'hidden';
        }
    })
 
 } );
 
 
 let passCheck = document.getElementById('password-checkbox');

 function boxChecked(){
    let passInput = document.getElementById('password-input');

    let curType = passInput.getAttribute("type");

    if(curType == "text"){
        passInput.setAttribute("type", "password");
    } else {
        passInput.setAttribute('type', 'text');
    }
     
 }

 function passValidator(){
     let usernameInput = document.getElementById('username-input');
     let passInput = document.getElementById('password-input');
     let errorDiv = document.getElementById('alerts');
     let errorSpan = document.getElementById('error-message');     

     if(passInput.value.indexOf(usernameInput.value) != -1){
         errorDiv.classList.value = "shown";
         errorSpan.innerText = "Your password cannot contain your username.";
     } else {
         errorDiv.classList.value = "hidden";
         errorSpan.innerText = "";
     } 
 }