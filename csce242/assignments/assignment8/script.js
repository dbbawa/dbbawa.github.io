const imagesArray = [
    { src: "images/birthday.jpg", title: "birthday", description: "Happy birthday to me!" },
    { src: "images/clown.jpg", title: "clown", description: "Boo! Wanna see a trick?" },
    { src: "images/rain.jpg", title: "rain", description: "Rain rain, go away!" },
    { src: "images/read.jpg", title: "read", description: "Wanna start a book club?" },
    { src: "images/shovel.jpg", title: "shovel", description: "Gonna garden some squash!" },
    { src: "images/work.jpg", title: "work", description: "I'm an engineering major!" }
];

function showDescription(title, description) {
    const descriptionDiv = document.getElementById('description');
    descriptionDiv.innerHTML = `<strong>${title}</strong><br>${description}`;
}

function setupImageClickEvents() {
    const images = document.querySelectorAll('#imageGrid img');
    images.forEach(image => {
        image.onclick = () => {
            const title = image.getAttribute('data-title');
            const description = image.getAttribute('data-description');
            showDescription(title, description);
        };
    });
}

function displayImages() {
    const imageGrid = document.getElementById('imageGrid');
    imagesArray.forEach(imageData => {
        const imgElement = document.createElement('img');
        imgElement.src = imageData.src;
        imgElement.setAttribute('data-title', imageData.title);
        imgElement.setAttribute('data-description', imageData.description);
        imgElement.onclick = () => showDescription(imageData.title, imageData.description);
        imageGrid.appendChild(imgElement);
    });
}

window.onload = () => {
    displayImages();
    setupImageClickEvents();
};