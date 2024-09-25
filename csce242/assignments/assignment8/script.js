const imagesArray = {
   "birthday": { src: "images/birthday.jpg", title: "birthday", description: "Happy birthday to me!" },
   "clown": { src: "images/clown.jpg", title: "clown", description: "Boo! Wanna see a trick?" },
   "rain": { src: "images/rain.jpg", title: "rain", description: "Rain rain, go away!" },
   "read": { src: "images/read.jpg", title: "read", description: "Wanna start a book club?" },
   "shovel": { src: "images/shovel.jpg", title: "shovel", description: "Gonna garden some squash!" },
   "work": { src: "images/work.jpg", title: "work", description: "I'm an engineering major!" }
};

const showDescription = (title, description) => {
    const descriptionDiv = document.getElementById('description');
    descriptionDiv.innerHTML = `<strong>${title}</strong><br>${description}`;
}

const displayImages = () => {
    const imageGrid = document.getElementById('imageGrid');
    Object.values(imagesArray).forEach(imageData => {
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
};