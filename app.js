'use strict';
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//               UNIVERSAL VARIABLES

var chances = 0;
var allPhotos = [];
var container = document.getElementById('container');
var left = document.getElementById('left');
var middle = document.getElementById('middle');
var right = document.getElementById('right');
var newArray = [];
var oldArray = [];

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                     NEW PHOTOS OBJECT CONSRUCTER
// this constructs the images used in the app

function Photos(name){
  this.name = name;
  this.alt = name;
  this.path = 'images/'+ name +'.jpg';
  this.clicks = 0;
  this.views = 0;
  allPhotos.push(this);
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                   GENERATES A RANDOM NUMBER
// this makes a randomm number
function rand() {
  return Math.floor(Math.random() * allPhotos.length);
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                  GENERATE 3 RANDOM NON DUPLICATE NUMBERS
// this makes three random numbers that are not the same in one array and not the
// same as the three before it and the three after it.
function makeArrayOfThree() {
  oldArray[0] = newArray[0];
  oldArray[1] = newArray[1];
  oldArray[2] = newArray[2];

  newArray[0] = rand();
  while(newArray[0] === oldArray[0] || newArray[0] === oldArray[1]||newArray[0] === oldArray[2]){
    newArray[0] = rand();
  }
  newArray[1] = rand();
  while(newArray[1] === newArray[0] || newArray[1] === oldArray[0] || newArray[1] === oldArray[1]|| newArray[1] === oldArray[2]) {
    newArray[1] = rand();
  }
  newArray[2] = rand();
  while (newArray[2] === newArray[0] || newArray[2] === newArray[1] || newArray[2] === oldArray[0] || newArray[2] === oldArray[1] || newArray[2] === oldArray[2]){
    newArray[2] = rand();
  }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                    RENDERS RANDOM IMAGES TO THE SCREEN

function populateImages() {
  makeArrayOfThree();
  console.log('================');
  left.src = allPhotos[newArray[0]].path;
  left.alt = allPhotos[newArray[0]].alt;
  allPhotos[newArray[0]].views += 1;
  // console.log('name: '+ allPhotos[newArray[0]].name );
  // console.log('views: '+ allPhotos[newArray[0]].views);
  // console.log('path: '+ allPhotos[newArray[0]].path);
  // console.log('clicks: '+ allPhotos[newArray[0]].clicks);
  // console.log('++++++++++++++++++');

  middle.src = allPhotos[newArray[1]].path;
  middle.alt = allPhotos[newArray[1]].alt
  allPhotos[newArray[1]].views += 1;
  // console.log('name: '+allPhotos[newArray[1]].name );
  // console.log('views: '+allPhotos[newArray[1]].views);
  // console.log('path: '+allPhotos[newArray[1]].path);
  // console.log('clicks: '+allPhotos[newArray[1]].clicks);
  // console.log('+++++++++++++++++');

  right.src = allPhotos[newArray[2]].path;
  right.alt = allPhotos[newArray[2]].alt;
  allPhotos[newArray[2]].views += 1;
  // console.log('name: '+allPhotos[newArray[2]].name );
  // console.log('views: '+allPhotos[newArray[2]].views);
  // console.log('path: '+allPhotos[newArray[2]].path);
  // console.log('clicks: '+allPhotos[newArray[2]].clicks);
  // console.log('====================');
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                   EVENT HANDLER
var listArray = [];
var nameArray = [];
function HandleClick(event) {
  // event.preventDefault();
  if(event.target.id === 'container') {
    alert('You have to click on an image!');

  } else {
    if(chances <= 25) {
      // console.log(event.target.id);
      for(var i = 0; i < allPhotos.length; i++) {
        if(event.target.alt === allPhotos[i].alt) {
          allPhotos[i].clicks += 1;
          // if (chances == 25) {
            // for(i = 0; i < allPhotos.length; i++) {
              // listArray.push('<li>'+ allPhotos[i].name+' got clicked  '+ allPhotos[i].clicks+ ' times</li>');
            //}
          // }
          listArray.push('<li>'+allPhotos[i].name+' '+allPhotos[i].clicks+'</li>');
          }
        }
        if (chances == 25) {
          // for (var i = 0 ;i < allPhotos.length ; i++) {
            document.getElementById('votelist').innerHTML = listArray;
            // document.getElementById('votelist').innerHTML = listArray
          //}
      }
      chances += 1;
      console.log(event.target.id);
      populateImages();// CALLS THIS FUNCTION FOR THE SECOND TIME
    } else {
      container.removeEventListener('click', HandleClick);
    }
  }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                 CALL THE PHOTO OBJECTS

new Photos('bag');
new Photos('banana');
new Photos('bathroom');
new Photos('boots');
new Photos('breakfast');
new Photos('bubblegum');
new Photos('chair');
new Photos('cthulhu');
new Photos('dog-duck');
new Photos('dragon');
new Photos('pen');
new Photos('pet-sweep');
new Photos('scissors');
new Photos('tauntaun');
new Photos('tentacles');
new Photos('unicorn');
new Photos('water-can');
new Photos('wine-glass');
new Photos('shark');
//new Photos('sweep');

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                     MAKE A LIST OF THE VOTES
// function listMaker() {
//   for(var i = 0; i < allPhotos.length; i++) {
//     document.getElementById('votelist').innerHTML = '<li>''allPhotos[i].clicks''</li>';
//   }
// }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//       CALLS THE IMAGE RENDERING FUNCTION FOR THE FIRST TIME

populateImages();
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                EVENT LISTENER

container.addEventListener('click',HandleClick);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                           THE END
