const bar = document.getElementById('bar');
const navList = document.getElementById('nav_list');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=>{
        navList.classList.add('active');
    })
} 
if(close){
    close.addEventListener('click', ()=>{
        navList.classList.remove('active');
    })
} 
