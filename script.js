AOS.init({
    duration: 1500, // Set fade duration to 2 seconds (2000ms)
    once: false
})

const slider = document.querySelector(".slide-wrapper");
const prevBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");


let cardWidth = 300 + 10;

function scrollSlider(directoin) {
    slider.scrollBy({
        left: directoin * cardWidth,
        behavior: 'smooth'
    });
    

    
}
// function updateScrollBtnDisplay() {
//     let maxScrollLeft = slider.scrollWidth - slider.clientWidth;
//         // Show/hide prevBtn and nextBtn 
//         if (slider.scrollLeft <= 0) {
//             prevBtn.style.display = 'none';
//         } else {
//             prevBtn.style.display = '';
//         }
//         if (slider.scrollLeft >= maxScrollLeft - 1) {
//             nextBtn.style.display = 'none';
//         } else {
//             nextBtn.style.display = '';
//         }
//     }

//     updateScrollBtnDisplay();
prevBtn.addEventListener('click', () => scrollSlider(-1));
nextBtn.addEventListener('click', () => scrollSlider(1));

let touchStartX = 0;
let touchEndX = 0;



// answer
let question = document.querySelectorAll(".question");

let answer = document.querySelector(".answer");

question.forEach(question => {
    question.addEventListener("click", function () {
        let answer = this.nextElementSibling;

        if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
            answer.style.maxHeight = "0px";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

let dropBtn = document.querySelector(".lan-btn");

dropBtn.addEventListener('click', ()=>{
    console.log("working");
    
    let drop = document.getElementById("dropdownMenu");
    console.log(drop);
    
    drop.classList.toggle("hidden");
});