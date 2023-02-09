//set a state of boolean open=> true or false.
//change the image state menu bar open or close.
// and show or close the menu options.
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const navBar = document.querySelector('nav');


openBtn.addEventListener('click', ()=>{
    navBar.classList.add('open');
    navBar.classList.remove('close');
})

closeBtn.addEventListener('click', ()=>{
    navBar.classList.remove('open');
    navBar.classList.add('close');
})