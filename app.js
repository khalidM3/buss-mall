'use strict';
var chances = 0;
var allPhotos = [];
var container = document.getElementById('container');
var left = document.getElementById('left');
var middle = document.getElementById('middle');
var right = document.getElementById('right');


function Photos(name, path, alt){
  this.name = name;
  this.path = path;
  this.alt = alt;
  this.clicks = 0;
  this.displayed = 0;
  allPhotos.push(this);
}
function populateImages() {
  var randomx = Math.floor(Math.random() * 20);
  var randomy = Math.floor(Math.random() * 20);
  var randomz = Math.floor(Math.random() * 20);

  left.src = allPhotos[randomx].path;
  middle.src = allPhotos[randomy].path;
  right.src = allPhotos[randomz].path;
}

function HandleClick(event) {
  event.preventDefault();

  if(event.target.id === 'container') {
    alert('You have to click on an image!');
  } else {
    console.log(event.target.id);
    chances += 1;
    console.log(chances);
    console.log(event.target.src);
  }
  if (event.target.src === allPhotos[])
}

new Photos('r2d2', 'images/bag.jpg');
new Photos('banana', 'images/banana.jpg');
new Photos('bathroom', 'images/bathroom.jpg');
new Photos('boots', 'images/boots.jpg');
new Photos('breakfast', 'images/breakfast.jpg');
new Photos('bubblegum', 'images/bubblegum.jpg');
new Photos('chair', 'images/chair.jpg');
new Photos('toydragon', 'images/dragon.jpg');
new Photos('dog', 'images/dog-duck.jpg');
new Photos('dragon meat', 'images/dragon.jpg');
new Photos('pen', 'images/pen.jpg');
new Photos('pet sweeper', 'images/pet-sweep.jpg');
new Photos('scissors', 'images/scissors.jpg');
new Photos('tauntaun', 'images/tauntaun.jpg');
new Photos('tentacles', 'images/tentacles.jpg');
new Photos('unicorn meat', 'images/unicorn.jpg');
new Photos('water can', 'images/water-can.jpg');
new Photos('wine glass', 'images/wine-glass.jpg');
new Photos('shark', 'images/shark.jpg');
new Photos('sweep', 'images/sweep.jpg');



populateImages();
container.addEventListener('click',HandleClick);
