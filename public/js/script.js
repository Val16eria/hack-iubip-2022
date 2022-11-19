// Кнопочки

let btnDecl = document.querySelector('.btn-decl');
let subBtn = document.querySelector('.sub-button1');
let subBtn2 = document.querySelector('.sub-button2');
let ndfl3 = document.querySelector('.ndfl-box-3');
let ndfl2 = document.querySelector('.ndfl-box-2');
let convert = document.querySelector('.convert-frx');
let convertBtn = document.querySelector('.convert--button');
let sidebarBtn1 = document.querySelector('.sidebar__button1');
let sidebarBtn2 = document.querySelector('.sidebar__button2');
let sidebarBtn3 = document.querySelector('.sidebar__button3');
let sidebarBtn4 = document.querySelector('.sidebar__button4');
let sidebarBtn5 = document.querySelector('.sidebar__button5');

btnDecl.addEventListener('click', function() {
    subBtn.classList.toggle('sub-button');
    subBtn2.classList.toggle('sub-button');
}) 

// Мэйн

subBtn.addEventListener('click', function() {
    convert.classList.add('convert-frx--close');
    ndfl2.classList.add('ndfl-closed');
    ndfl3.classList.remove('ndfl-closed');
}) 

convertBtn.addEventListener('click', function() {
    ndfl2.classList.add('ndfl-closed');
    ndfl3.classList.add('ndfl-closed');
    convert.classList.remove('convert-frx--close');
}) 

subBtn2.addEventListener('click', function() {
    convert.classList.add('convert-frx--close');
    ndfl3.classList.add('ndfl-closed');
    ndfl2.classList.remove('ndfl-closed');
}) 

sidebarBtn1.addEventListener('click', function() {
    sidebarBtn1.classList.add('active-button');
    sidebarBtn2.classList.remove('active-button');
    sidebarBtn3.classList.remove('active-button');
    sidebarBtn4.classList.remove('active-button');
    sidebarBtn5.classList.remove('active-button');
}) 

sidebarBtn2.addEventListener('click', function() {
    sidebarBtn2.classList.add('active-button');
    sidebarBtn1.classList.remove('active-button');
    sidebarBtn3.classList.remove('active-button');
    sidebarBtn4.classList.remove('active-button');
    sidebarBtn5.classList.remove('active-button');
}) 

sidebarBtn3.addEventListener('click', function() {
    sidebarBtn3.classList.add('active-button');
    sidebarBtn2.classList.remove('active-button');
    sidebarBtn1.classList.remove('active-button');
    sidebarBtn4.classList.remove('active-button');
    sidebarBtn5.classList.remove('active-button');
}) 

sidebarBtn4.addEventListener('click', function() {
    sidebarBtn4.classList.add('active-button');
    sidebarBtn2.classList.remove('active-button');
    sidebarBtn3.classList.remove('active-button');
    sidebarBtn1.classList.remove('active-button');
    sidebarBtn5.classList.remove('active-button');
}) 

sidebarBtn5.addEventListener('click', function() {
    sidebarBtn5.classList.add('active-button');
    sidebarBtn2.classList.remove('active-button');
    sidebarBtn3.classList.remove('active-button');
    sidebarBtn4.classList.remove('active-button');
    sidebarBtn1.classList.remove('active-button');
}) 