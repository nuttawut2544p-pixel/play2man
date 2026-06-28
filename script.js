console.log("Play2Man Website Loaded 🚀");

const btn = document.querySelector(".join-btn");

btn.addEventListener("mouseenter",()=>{
    btn.style.transform="scale(1.08)";
});

btn.addEventListener("mouseleave",()=>{
    btn.style.transform="scale(1)";
});
