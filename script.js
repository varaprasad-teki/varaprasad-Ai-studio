// Mobile Menu

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

// Custom Cursor

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

// Scroll Reveal

const cards =
document.querySelectorAll(
".card,.glass-card,.skill"
);

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition="all .8s ease";

observer.observe(card);

});

// Navbar Effect

window.addEventListener("scroll",()=>{

const nav =
document.querySelector("nav");

if(window.scrollY > 50){

nav.style.background =
"rgba(0,0,0,.4)";

}else{

nav.style.background =
"rgba(255,255,255,.05)";
}

});
