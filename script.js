// Scroll Animation

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

sections.forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

// Back To Top

const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// Floating Particles

const container=document.getElementById("particles");

for(let i=0;i<70;i++){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=(5+Math.random()*10)+"s";

p.style.animationDelay=Math.random()*5+"s";

container.appendChild(p);

}
