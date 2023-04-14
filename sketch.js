let img;
let img2;
let imgindic;
let images1 = [];
let images2 = [];
let images3 = [];
let selectedImages = [];
let numImages = 2;
let margin = 20;
let canvasWidth = 0;
let canvasHeight = 0;


function preload() {
  {
  img = loadImage("https://i.imgur.com/2wzqqNb.png");
    img2 = loadImage("https://i.imgur.com/OEKIlJc.png");
    imgindic = loadImage("https://i.imgur.com/tRxGEyN.png");
}
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage("https://i.imgur.com/WbI8PPx.png");
    images1.push(img);
  }
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage("https://i.imgur.com/VWhXqca.png");
    images1.push(img);
  }
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage("https://i.imgur.com/nK1t7t7.png");
    images2.push(img);
  }
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage("https://i.imgur.com/WbI8PPx.png");
    images2.push(img);
  }
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage("https://i.imgur.com/VWhXqca.png");
    images2.push(img);
  }
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage("https://i.imgur.com/nK1t7t7.png");
    images3.push(img);
  }
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage("https://i.imgur.com/WbI8PPx.png");
    images3.push(img);
  }
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage("https://i.imgur.com/VWhXqca.png");
    images3.push(img);
  }
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage("https://i.imgur.com/apHIGMM.png");
    images3.push(img);
  }
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage("https://i.imgur.com/dTh64FQ.png");
    images3.push(img);
  }
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage("https://i.imgur.com/an38jOS.png");
    images3.push(img);
  }
  
}

function setup() {
  createCanvas(500, 500);
  canvasWidth = width - 2*margin;
  canvasHeight = height - 2*margin;
  textAlign(CENTER, CENTER);
  
  
  
  let button1 = createButton("Noires/Croches");
  button1.position(0, height + margin);
  button1.mousePressed(selectImages1);
  
  let button2 = createButton("Chut/Noires/Croches");
  button2.position(button1.width + margin, height + margin);
  button2.mousePressed(selectImages2);
  
  let button3 = createButton("Chut/Noires/Croches/Doubles Croches");
  button3.position(0, button1.position().y + button1.height + margin);
  button3.style('margin-top', '10px'); // Optional styling for visual separation
  button3.mousePressed(selectImages3);
}

function draw() {
  background(255);
  // Afficher l'image en haut à gauche du canvas
  imageMode(CORNER);
  image(img, 0, 0, 100, 100);
  // Afficher l'image en haut à droite du canvas
  imageMode(CORNER);
  image(img2, width - 100, 0, 100, 100);
  
 
  if (selectedImages.length > 0) {
    let totalWidth = 0;
    for (let i = 0; i < selectedImages.length; i++) {
      totalWidth += selectedImages[i].width;
    }
    let x = margin;
    for (let i = 0; i < selectedImages.length; i++) {
      let y = height/2 - selectedImages[i].height/2;
      image(selectedImages[i], x, y);
      x += selectedImages[i].width + (canvasWidth - totalWidth)/(selectedImages.length - 1);
    }
  } else {
    textSize(30);
    text("HEY HO ! LET'S GO !", width/2, height/2);
  }
  // Afficher l'image en bas centrer du canvas
  imageMode(CENTER);
  image(imgindic, width - 320, 405, 350, 175);
}

function selectImages1() {
  selectedImages = [];
  let imagesCopy = images1.slice();
  for (let i = 0; i < 4; i++) {
    let img = random(imagesCopy);
    selectedImages.push(img);
    imagesCopy.splice(imagesCopy.indexOf(img), 1);
  }
}

function selectImages2() {
  selectedImages = [];
  let imagesCopy = images2.slice();
  for (let i = 0; i < 4; i++) {
    let img = random(imagesCopy);
    selectedImages.push(img);
    imagesCopy.splice(imagesCopy.indexOf(img), 1);
  }
}

function selectImages3() {
  selectedImages = [];
  let imagesCopy = images3.slice();
  for (let i = 0; i < 4; i++) {
    let img = random(imagesCopy);
    selectedImages.push(img);
    imagesCopy.splice(imagesCopy.indexOf(img), 1);
  }
}