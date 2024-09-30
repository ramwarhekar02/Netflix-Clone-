const images = document.querySelector(".scroll-images");
const backBtn = document.querySelector(".leftbtn");
const nextBtn = document.querySelector(".rightbtn");

images.addEventListener("wheel", (event)=> { 
    event.preventDefault();
    images.style.scollLeft += event.deltaY
    images.style.scrollBehaviour = "auto";
})

nextBtn.addEventListener("click", ()=> {
    images.style.scrollBehaviour = "smooth";
    images.scrollLeft += 1000;
});

backBtn.addEventListener("click", ()=> {
    images.style.scrollBehaviour = "smooth";
    images.scrollLeft -= 1000;
});

const firstBox = document.querySelector(".first");
const ansBox = document.querySelector(".bottom");

questions.forEach(element => {
    
});

function add() { 
    firstBox.addEventListener("click", (event)=> {
        ansBox.style = "display: block";
    })
}

add();
remove();