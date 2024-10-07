class Bird {
    constructor(name, size, lifespan, food, habitat, interestingFact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.interestingFact = interestingFact;
        this.image = image;
    }

    getSection() {
        return `
            <div class="bird">
                <strong class="title">${this.name}</strong>
                <img src="${this.image}" alt="${this.name}" class="image" />
            </div>
        `;
    }

    getExpandedSection() {
        return `
            <div class="modal-content">
                <div class="modal-text">
                    <h2>${this.name}</h2>
                    <p>Size: ${this.size}</p>
                    <p>Lifespan: ${this.lifespan}</p>
                    <p>Food: ${this.food}</p>
                    <p>Habitat: ${this.habitat}</p>
                    <p>Interesting Fact: ${this.interestingFact}</p>
                </div>
                <div class="modal-image">
                    <img src="${this.image}" alt="${this.name}" />
                </div>
            </div>
        `;
    }
}

const birds = [
    new Bird('Hummingbird', '3-5 inches', '3-5 years', 'Nectar', 'Trees', "They can fly backwards", 'images/hummingbird.jpg'),
    new Bird('Blue Jay', '11-12 inches', '7-17 years', 'Nuts', 'Forests', 'Make 1k trips per day when hiding food', 'images/bluejay.avif'),
    new Bird('Cardinal', '8-9 inches', '3-15 years', 'Seeds', 'Forests', 'They can make more than 25 sounds', 'images/cardinal.avif'),
    new Bird('Robin', '7-11 inches', '5-13 years', 'Insects', 'Forests', 'They have 3,000 feathers', 'images/robin.avif')
];

function displayBirds() {
    const container = document.getElementById('bird-container');
    birds.forEach(bird => {
        container.innerHTML += bird.getSection();
    });

    const birdElements = container.getElementsByClassName('bird');
    for (let i = 0; i < birdElements.length; i++) {
        birdElements[i].addEventListener('click', () => {
            showModal(birds[i].name);
        });
    }
}

function showModal(name) {
    const bird = birds.find(b => b.name === name);
    const modal = document.getElementById('myModal');
    modal.querySelector('.w3-modal-content').innerHTML = bird.getExpandedSection();
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

document.getElementById('myModal').addEventListener('click', closeModal);

window.onload = displayBirds;
