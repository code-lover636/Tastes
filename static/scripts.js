// Nav bar
const menu=document.querySelector('.menu');
const close=document.querySelector('.close');
const nav=document.querySelector('nav');

menu.addEventListener('click',function(){
    nav.classList.add('open-nav');
});
close.addEventListener('click',function(){
    nav.classList.remove('open-nav');
});