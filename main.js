'use strict';

const imgLinks = [
  { Title: 'Earth', Description: 'Earth is a beautiful place', Src: 'earth.jpeg' },
  { Title: 'Galaxy', Description: 'Galaxy is a wast and dangerous place', Src: 'galaxy.jpeg' },
  { Title: 'Storm', Description: 'I like Storms', Src: 'storm.jpeg' },
  { Title: 'Cityscape', Description: 'Don\'t live in cities, it\'s crowded', Src: 'city.jpeg' }
];

let thumbnails = document.querySelector('#thumbnails');
let leftarrow = document.querySelector('#leftarrow');
let imgTitle = document.querySelector('#img-title');
let imgDescription = document.querySelector('#img-description');

// setting 1st picture text
imgTitle.innerText = imgLinks[1].Title;
imgDescription.innerText = imgLinks[1].Description;

// thumbnail click event 
function thumbnailClick(e) {
  let actualImg = document.querySelector('#center-img');
  actualImg.setAttribute('src', `${e.target.getAttribute('src')}`)
  imgTitle.innerText = imgLinks[e.target.id].Title;
  imgDescription.innerText = imgLinks[e.target.id].Description;
}

// creating thumbnail pictures
for (let i = 0; i < imgLinks.length; i++) {
  let imgElement = document.createElement('img');
  imgElement.setAttribute('src', `./img/${imgLinks[i].Src}`);
  imgElement.setAttribute('class', 'thumbnail-img');
  imgElement.setAttribute('id', `${i}`);
  imgElement.onclick = thumbnailClick;

  thumbnails.appendChild(imgElement);
}

let thumbImgs = document.querySelectorAll('.thumbnail-img');

// arrow buttons
// left function
function toggleLeft() {
  {
    let actualImg = document.querySelector('#center-img');
    // finding all sources
    let srcList = [];
    imgLinks.forEach(pics => {
      srcList.push(pics.Src);
    })
    // index of actual img src
    let actualImgIndex = srcList.indexOf((actualImg.getAttribute('src').slice(6)));

    if (actualImgIndex < 1) { } else {
      actualImg.setAttribute('src', `./img/${srcList[actualImgIndex - 1]}`)
      imgTitle.innerText = imgLinks[actualImgIndex - 1].Title;
      imgDescription.innerText = imgLinks[actualImgIndex - 1].Description;
    }
  }
}
// right function
function toggleRight() {
  let actualImg = document.querySelector('#center-img');
  // finding all sources
  let srcList = [];
  imgLinks.forEach(pics => {
    srcList.push(pics.Src);
  })
  // index of actual img src
  let actualImgIndex = srcList.indexOf((actualImg.getAttribute('src').slice(6)));

  if (actualImgIndex > srcList.length - 2) { } else {
    actualImg.setAttribute('src', `./img/${srcList[actualImgIndex + 1]}`)
    imgTitle.innerText = imgLinks[actualImgIndex + 1].Title;
    imgDescription.innerText = imgLinks[actualImgIndex + 1].Description;
  }
}
// listeners
leftarrow.onclick = toggleLeft;
rightarrow.onclick = toggleRight;

// navigate with keys
document.body.addEventListener('keydown', onKeyPress);

function onKeyPress(event) {

  switch (event.keyCode) {

    case 37: // left
    toggleLeft();
    break;
    case 39: // right
    toggleRight();
    break;
  }
}