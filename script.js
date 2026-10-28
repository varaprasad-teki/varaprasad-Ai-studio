const cards=document.querySelectorAll(".card,.glass");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(70px)";
card.style.transition="all 1s ease";

observer.observe(card);

});

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="rgba(0,0,0,.5)";

}else{

nav.style.background="rgba(255,255,255,.03)";
}

});
