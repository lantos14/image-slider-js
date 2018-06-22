'use strict';

const imgLinks = ['earth.jpeg', 'galaxy.jpeg', 'storm.jpeg']

let thumbnails = document.querySelector('#thumbnails');

// creating thumbnail pictures
for (let i = 0; i < imgLinks.length; i++) {
  let imgElement = document.createElement('img');
  imgElement.setAttribute('src',`./img/${imgLinks[i]}`);
  imgElement.setAttribute('class','thumbnail-img');

  thumbnails.appendChild(imgElement);
}



// applying onclick event to thumbnails
let $ = function (selector) {
  return document.querySelectorAll(selector);
};

$('.thumbnail-img').onclick = function thumbnailClick() {
  alert('more click thing is working');
}


thumbImgs[0].onclick = () => {
  let actualImg = document.querySelector('#center-img');
  actualImg.setAttribute('src', `${thumbImgs[0].getAttribute('src')}`)
}

thumbImgs[1].onclick = () => {
  let actualImg = document.querySelector('#center-img');
  actualImg.setAttribute('src', `${thumbImgs[1].getAttribute('src')}`)
}

thumbImgs[2].onclick = () => {
  let actualImg = document.querySelector('#center-img');
  actualImg.setAttribute('src', `${thumbImgs[2].getAttribute('src')}`)
}