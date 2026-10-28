const sections = document.querySelectorAll(
".card,.project-card,.contact-box"
);

const observer = new IntersectionObserver(
(entries)=>{
entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(80px)";
item.style.transition="all 1s ease";

observer.observe(item);

});

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="rgba(0,0,0,.4)";

}else{

nav.style.background="rgba(255,255,255,.03)";

}

});
