const loadIceCreamData = async () => {
    const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
    const iceCreams = await response.json();

    const container = document.querySelector('.ice-cream-container');

    iceCreams.forEach(iceCream => {
        const iceCreamDiv = document.createElement('div');
        iceCreamDiv.classList.add('ice-cream-item');

        const img = document.createElement('img');
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
        img.alt = iceCream.name;

        const nameOverlay = document.createElement('div');
        nameOverlay.classList.add('ice-cream-name');
        nameOverlay.textContent = iceCream.name;

        iceCreamDiv.appendChild(img);
        iceCreamDiv.appendChild(nameOverlay);

        container.appendChild(iceCreamDiv);
    });
}

loadIceCreamData();

  