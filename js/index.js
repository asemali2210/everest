const navbar = document.querySelector('#navbar');
const content = document.querySelector('#content');
const scrollDown = document.querySelector('#scrollDown');
const main = document.querySelector('#main');

document.addEventListener('DOMContentLoaded', () => {
    navbar.classList.add('animate__slideInDown');
    content.classList.add('animate__slideInDown');
    scrollDown.classList.add('animate__slideInUp');
    main.classList.add('--on-load');
    
})

var input = {
    mouseX: {
        start:0,
        end: window.innerWidth,
        current: 0,
    },
    mouseY:{
        start:0,
        end: window.innerHeight,
        current: 0,
    }
} 

input.mouseX.range = input.mouseX.end - input.mouseX.start; 
input.mouseY.range = input.mouseY.end - input.mouseY.start; 

const handleMouseMove = (event) => {
    input.mouseX.current = event.clientX;
    input.mouseY.current = event.clientY;

    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

}
const handleResize = (event) => {
    input.mouseX.end = window.innerWidth;
    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;

}

// when mouse move
window.addEventListener('mousemove', handleMouseMove)

// when screen resize
window.addEventListener('resize', handleResize)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
  });
