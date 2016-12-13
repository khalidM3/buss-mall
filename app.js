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
  //gen random numbers
  var x = Math.floor(Math.random() * allPhotos.length);
  var y = Math.floor(Math.random() * allPhotos.length);
  var z = Math.floor(Math.random() * allPhotos.length);
  if(x !== y && x !== z && y !== z ) {
    var x2 = x;
    var y2 = y;
    var z2 = z;
    left.src = allPhotos[x].path;
    middle.src = allPhotos[y].path;
    right.src = allPhotos[z].path;
  }
  function checkPrevNum() {
    var chk = populateImages();
    if (x2 == x && y2 == y && z2 == z) {
      populateImages()
    }

  }
}

function HandleClick(event) {
  // event.preventDefault();
  if(event.target.id === 'container') {
    alert('You have to click on an image!');
  } else {
    if(chances < 25) {
      console.log(event.target.id);
      chances += 1;
      console.log(chances);
      console.log(event.target.src);
      populateImages();
    } else {
      container.removeEventListener('click', HandleClick);
    }
  }
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
