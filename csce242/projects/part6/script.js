// hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});

// json
const getDestinations = async () => {
    try {
        const response = await fetch("destinations.json"); 
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showDestinations = async () => {
    const destinationsData = await getDestinations();
    const destinations = destinationsData.destinations; 

    destinations.forEach(destination => {
        const section = document.createElement("section");
        section.classList.add("dest-container");
        section.onclick = () => showDetails(destination); 

        document.getElementById("destinations-section").append(section); 

        const img = document.createElement("div");
        img.classList.add("dest-img");
        img.src = destination.image; 
        section.appendChild(img);

        const destName = document.createElement("div");
        destName.classList.add("dest-title");
        destName.textContent = destination.name; 
        section.appendChild(destName);

    });
};