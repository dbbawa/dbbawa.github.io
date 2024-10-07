// Create the Bird class
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

    // Method to generate the bird's section for the main page
    getSection() {
        return `
            <div class="bird" onclick="showModal('${this.name}')">
                <strong class="title">${this.name}</strong>
                <img src="${this.image}" alt="${this.name}" class="image" />
            </div>
        `;
    }

    // Method to generate the bird's expanded details for the modal
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

// Array of bird objects
const birds = [
    new Bird('Hummingbird', '2.5 inches', '3-5 years', 'Nectar', 'Trees', "They're nicknamed 'Hummers'", 'images/hummingbird.jpg'),
    new Bird('Blue Jay', '9-12 inches', '7 years', 'Seeds, insects', 'Woodlands', 'Known for their intelligence', 'images/bluejay.avif'),
    new Bird('Cardinal', '8-9 inches', '3 years', 'Seeds, fruit', 'Gardens', 'They’re often seen in pairs', 'images/cardinal.avif'),
    new Bird('Robin', '9-11 inches', '2 years', 'Insects, berries', 'Forests', 'They’re a sign of spring', 'images/robin.avif')
];

// Function to display birds in the container
function displayBirds() {
    const container = document.getElementById('bird-container');
    birds.forEach(bird => {
        container.innerHTML += bird.getSection();
    });
}

// Function to open the modal with the selected bird's details
function showModal(name) {
    const bird = birds.find(b => b.name === name);
    const modal = document.getElementById('myModal');
    modal.querySelector('.w3-modal-content').innerHTML = bird.getExpandedSection();
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Display the birds once the window has loaded
window.onload = displayBirds;
