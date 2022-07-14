const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

const chosenImage = Math.floor(Math.random()*images.length);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}.jpg`;

//CSS.body.appendChild(`img/${chosenImage}.jpg`);

document.body.appendChild(bgImage);
