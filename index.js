let scrollbar=document.querySelector(".scrollbar");
let container=document.querySelector(".scontainer");
let scroll=document.querySelector(".scrolll");

window.addEventListener("scroll",()=>{
    console.log("scroll",window.scrollY);
    console.log("scrollHeight",document.body.scrollHeight);
    console.log("innerHeight",window.innerHeight);
    
    let percentage=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100
    scrollbar.style.width = percentage + '%'
}) 