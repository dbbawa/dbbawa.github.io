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
        if (!response.ok) throw new Error('not ok');
        const data = await response.json();
        console.log(data); 
        return data;
    } catch (error) {
        console.log('Fetch error:', error);
    }
};

const showDestinations = async () => {
    const destinationsData = await getDestinations();
    if (!destinationsData || !destinationsData.destinations) {
        console.error("No data"); 
        return;
    }

    const destinations = destinationsData.destinations; 
    const destinationContainer = document.getElementById("destinations-section");

    destinations.forEach(destination => {
        const section = document.createElement("section");
        section.classList.add("dest-container");
        section.onclick = () => showDetails(destination); 

        const destName = document.createElement("div");
        destName.classList.add("dest-title");
        destName.textContent = destination.name; 
        section.appendChild(destName);

        const img = document.createElement("img");
        img.classList.add("dest-img");
        img.src = destination.detail_image; 
        section.appendChild(img);

        document.getElementById("destinations-section").append(section); 

    });
};
showDestinations();

const showDetails = (destination) => {
    document.getElementById("modal-image").src = destination.image;
    document.getElementById("modal-title").textContent = destination.title; 

    document.getElementById("modal-slopes").textContent = destination.slopes.description;

    document.getElementById("modal-ski-season").textContent = destination.ski_season.description;

    document.getElementById("modal-shopping").textContent = destination.shopping_restaurants.description;

    const resortsList = document.getElementById("modal-resorts");
    resortsList.innerHTML = ''; 
    destination.resorts.forEach(resort => {
        const listItem = document.createElement("li");
        listItem.textContent = resort;
        resortsList.appendChild(listItem);
    });

    const factsList = document.getElementById("modal-facts");
    factsList.innerHTML = ''; 
    destination.special_facts.forEach(fact => {
        const listItem = document.createElement("li");
        listItem.textContent = fact;
        factsList.appendChild(listItem);
    });

    const activitiesList = document.getElementById("modal-activities");
    activitiesList.innerHTML = ''; 
    destination.activities.forEach(activity => {
        const listItem = document.createElement("li");
        listItem.textContent = activity;
        activitiesList.appendChild(listItem);
    });

    const modal = document.getElementById("destination-modal");
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false"); 

    const closeButton = document.querySelector(".close-button");
    closeButton.onclick = () => closeModal();
};

const closeModal = () => {
    const modal = document.getElementById("destination-modal");
    modal.style.display = "none"; 
    modal.setAttribute("aria-hidden", "true");
};

window.onclick = (event) => {
    const modal = document.getElementById("destination-modal");
    if (event.target === modal) {
        closeModal();
    }
};