const items = [
  {
    name: 'Product 1',
    price: 19.99,
    imageUrl: "guitar-image/Charvel Pro-Mod Dk24 HSS/1.jpg",
  },
  {
    name: 'Product 2',
    price: 19.99,
    imageUrl: "guitar-image/ESP LTD EC-256/1.jpg",
  },
  {
    name: 'Product 3',
    price: 19.99,
    imageUrl: "guitar-image/ESP LTD EC-1000/1.jpg",
  },
  {
    name: 'Product 4',
    price: 19.99,
    imageUrl: "guitar-image/Fender Player Series Stratocaster/1.jpg",
  },
  {
    name: 'Product 5',
    price: 19.99,
    imageUrl: "guitar-image/Gibson Les Paul Standard 60's/1.jpg",
  },
  {
    name: 'Product 6',
    price: 19.99,
    imageUrl: "guitar-image/Ibanez THBB10 Tim Henson/1.jpg",
  },
  {
    name: 'Product 7',
    price: 19.99,
    imageUrl: "guitar-image/Ibanez TOD10N Tim Henson Signature Nylon Acoustic-Electric Guitar/1.png",
  },
  {
    name: 'Product 8',
    price: 19.99,
    imageUrl: "guitar-image/Martin Guitars D-18/1.jpg",
  },
  {
    name: 'Product 9',
    price: 19.99,
    imageUrl: "guitar-image/Taylor GS MINI/1.jpg",
  },
  {
    name: 'Product 10',
    price: 19.99,
    imageUrl: "guitar-image/Yamaha Pacifica 112v/1.jpg",
  },
  
  // Add more items as needed...
];

function renderItems() {
  const itemContainer = document.getElementById('item-container');
  itemContainer.innerHTML = '';

  items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');

    const imageElement = document.createElement('img');
    imageElement.src = item.imageUrl; // Set the image URL correctly
    imageElement.alt = item.name; // Set alternative text for accessibility
    itemElement.appendChild(imageElement);

    const itemInfoElement = document.createElement('div');
    itemInfoElement.classList.add('item-info');

    const nameElement = document.createElement('h2');
    nameElement.textContent = item.name;
    itemInfoElement.appendChild(nameElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `$${item.price.toFixed(2)}`;
    itemInfoElement.appendChild(priceElement);

    itemElement.appendChild(itemInfoElement);

    itemContainer.appendChild(itemElement);
  });
}

renderItems();
