//column1
let count = 0;

const column1 = document.getElementById('column1');

function handleClick() {
    count++;
    column1.innerHTML = `<div class="count-title">Count</div><div class="count-number">${count}</div>`;
}

column1.innerHTML = `<div class="count-title">Count</div><div class="count-number">0</div>`;

column1.addEventListener('click', handleClick);

//column2
const refreshImage = document.getElementById('random-image');

refreshImage.addEventListener('click', function() {
    location.reload(); 
});

//column3
const slider = document.getElementById('slider');
const sliderImage = document.getElementById('slider-image');

slider.addEventListener('input', function() {
    const value = slider.value;
    const max = slider.max;
    const width = sliderImage.parentElement.offsetWidth;
    
    sliderImage.style.left = `${(value / max) * width}px`;
});