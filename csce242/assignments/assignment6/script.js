// toggle
const menuToggle = document.getElementById("menu-toggle");
const menuItems = document.getElementById("menu-items");
const arrow = document.getElementById("arrow");

menuToggle.addEventListener("click", () => {
    if (menuItems.style.display === "block") {
        menuItems.style.display = "none";
        arrow.innerHTML = "▼"; 
    } else {
        menuItems.style.display = "block";
        arrow.innerHTML = "▲";  
    }
});

// slider
const slider = document.getElementById('slider');
const colorMessage = document.getElementById('color-message');
const sliderBox = document.getElementById('slider-box');

slider.addEventListener('input', () => {
    const r = slider.value;
    const g = 0;
    const b = 0;
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    sliderBox.style.backgroundColor = rgbColor; 

    if (r < 85) {
        colorMessage.textContent = "Cherries";
    } else if (r < 170) {
        colorMessage.textContent = "Red Apple";
    } else {
        colorMessage.textContent = "Watermelon";
    }
});

// pic chooser
const buttons = document.querySelectorAll('.button');
const chosenImage = document.getElementById('chosen-image');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const size = button.dataset.size; 
        let imageUrl;

        if (size === 'small') {
            imageUrl = 'https://picsum.photos/100'; 
        } else if (size === 'medium') {
            imageUrl = 'https://picsum.photos/200';
        } else if (size === 'large') {
            imageUrl = 'https://picsum.photos/300'; 
        }

        chosenImage.src = imageUrl;
        chosenImage.style.display = 'block'; 
    });
});

// exercise toggle
const exerciseItems = document.querySelectorAll('.menu-items li');

exerciseItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.textContent === 'Exercise 1') {
            document.getElementById('slider-section').style.display = 'block';
            document.getElementById('pic-chooser-section').style.display = 'none';
        } else if (item.textContent === 'Exercise 2') {
            document.getElementById('slider-section').style.display = 'none';
            document.getElementById('pic-chooser-section').style.display = 'block';
        }
    });
});

document.getElementById('slider-section').style.display = 'block'; 
document.getElementById('pic-chooser-section').style.display = 'none';