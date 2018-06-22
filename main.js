'use strict';

const imgLinks = [
  {Title: 'Earth', Description: 'Earth is a beautiful place', Src: 'earth.jpeg'},
  {Title: 'Galaxy', Description: 'Galaxy is a wast and dangerous place', Src: 'galaxy.jpeg'},
  {Title: 'Storm', Description: 'I like Storms', Src: 'storm.jpeg'},
  {Title: 'Cityscape', Description: 'Don\'t live in cities, it\'s crowded', Src: 'city.jpeg'}
];

let thumbnails = document.querySelector('#thumbnails');
let leftarrow = document.querySelector('#leftarrow');
let imgTitle = document.querySelector('#img-title');
let imgDescription = document.querySelector('#img-description');

// setting 1st picture text
imgTitle.innerText = imgLinks[1].Title;
imgDescription.innerText = imgLinks[1].Description;

// creating thumbnail pictures
for (let i = 0; i < imgLinks.length; i++) {
  let imgElement = document.createElement('img');
  imgElement.setAttribute('src', `./img/${imgLinks[i].Src}`);
  imgElement.setAttribute('class', 'thumbnail-img');

  thumbnails.appendChild(imgElement);
}

let thumbImgs = document.querySelectorAll('.thumbnail-img');

// applying arrow buttons
leftarrow.onclick = () => {
  if (leftarrow) {
    console.log('this is left arrow') 
  }
  let actualImg = document.querySelector('#center-img');
  // finding all sources
  let srcList = [];
  imgLinks.forEach( pics => {
    srcList.push(pics.Src);
  })
  // index of actual img src
  let actualImgIndex = srcList.indexOf((actualImg.getAttribute('src').slice(6))); 
  
  if (actualImgIndex < 1) { } else {
    actualImg.setAttribute('src', `./img/${srcList[actualImgIndex - 1]}`)
  }
}

rightarrow.onclick = () => {
  if (rightarrow) {
    console.log('this is rigth arrow') 
  }
  let actualImg = document.querySelector('#center-img');
  // finding all sources
  let srcList = [];
  imgLinks.forEach( pics => {
    srcList.push(pics.Src);
  })
  // index of actual img src
  let actualImgIndex = srcList.indexOf((actualImg.getAttribute('src').slice(6))); 
  
  if (actualImgIndex > srcList.length - 2) { } else {
    actualImg.setAttribute('src', `./img/${srcList[actualImgIndex + 1]}`)
  }
}

// applying onclick event to thumbnails -- hardcoded

thumbImgs[0].onclick = () => {
  let actualImg = document.querySelector('#center-img');
  actualImg.setAttribute('src', `${thumbImgs[0].getAttribute('src')}`)
  imgTitle.innerText = imgLinks[0].Title;
  imgDescription.innerText = imgLinks[0].Description;
}

thumbImgs[1].onclick = () => {
  let actualImg = document.querySelector('#center-img');
  actualImg.setAttribute('src', `${thumbImgs[1].getAttribute('src')}`)
  imgTitle.innerText = imgLinks[1].Title;
  imgDescription.innerText = imgLinks[1].Description;
}

thumbImgs[2].onclick = () => {
  let actualImg = document.querySelector('#center-img');
  actualImg.setAttribute('src', `${thumbImgs[2].getAttribute('src')}`)
  imgTitle.innerText = imgLinks[2].Title;
  imgDescription.innerText = imgLinks[2].Description;
}

thumbImgs[3].onclick = () => {
  let actualImg = document.querySelector('#center-img');
  actualImg.setAttribute('src', `${thumbImgs[3].getAttribute('src')}`)
  imgTitle.innerText = imgLinks[2].Title;
  imgDescription.innerText = imgLinks[3].Description;
}