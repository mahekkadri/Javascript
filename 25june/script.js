const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
];

let index = 0;

const img = document.getElementById("sliderImage");
const counter = document.getElementById("counter");
const dots = document.getElementById("dots");

for(let i=0;i<images.length;i++){
    dots.innerHTML += `<span class="dot" onclick="showImage(${i})"></span>`;
}

const allDots = document.querySelectorAll(".dot");

function showImage(i){

    if(i!=undefined){
        index=i;
    }

    img.src=images[index];
    counter.innerHTML=`Image ${index+1} of ${images.length}`;

    allDots.forEach(dot=>dot.classList.remove("active"));
    allDots[index].classList.add("active");
}

function nextSlide(){
    index++;
    if(index==images.length){
        index=0;
    }
    showImage();
}

function prevSlide(){
    index--;
    if(index<0){
        index=images.length-1;
    }
    showImage();
}

showImage();