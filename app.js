const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
var shop = [
  {
    title: 'GHOST',
    image: './sale pics/035bec_eaddc9d0658a466499cd804f9e7f53d5~mv2.webp',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    title: 'BO & LUKE',
    image: './sale pics/0_NCra6TruPYCn1OcG.jpg',
    price: '',
    description: 'Lorem ipsum dolor sit.'
  },
  {
    title: 'THING',
    image: './sale pics/10-majestic-maine-coon.jpg',
    price: '',
    description: 'Lorem ipsum dolor sit amet.'
  },
  {
    title: 'WATCH',
    image: './sale pics/IMG_7029_JPG.webp',
    price: '',
    description: 'Lorem ipsum dolor sit.'
  },
  {
    title: 'SIMBA & TIGER',
    image: './sale pics/6-147.webp',
    price: '',
    description: 'Lorem ipsum dolor sit.'
  },
  {
    title: 'SKULL',
    image: './sale pics/maine-coon-striped-cat.webp',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    title: 'STRETCH',
    image: './sale pics/802c7ac038cc57852cccd2bf0e1dbd08.jpg',
    price: '',
    description: 'Lorem ipsum dolor sit.'
  },
  {
    title: 'MR BIG',
    image: './sale pics/900_HH-Photography-of-Florida_MC781.jpg',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'SMOKEY & SHADOW',
    image: './sale pics/attachment-Maine-Coon-Cat-Twix-and-Twizzle-bros-rescued-from-Brooklyn-in-Biddeford.jpg',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
  },
  {
    title: 'FLUFF & CHUNK',
    image: './sale pics/mainecoon_of_ig_81897006_118203266355720_1610196586135730123_n-e1578685230120.jpg',
    price: '1350',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    title: 'SPIKE',
    image: './sale pics/Maine Coon.2.jpg',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    title: 'CHASE',
    image: './sale pics/c3f8714ad343b4aaa1d9d9d9bca0e547.jpg',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    title: 'HEATHCLIFF',
    image: './sale pics/Orange-Maine-Coon.webp',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    title: 'FURBALL',
    image: './sale pics/cat.png',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    title: 'LYNX',
    image: './sale pics/Tabbies-with-White.jpg',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    title: 'WILDMAN',
    image: './sale pics/The-Maine-Coon.jpg',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    title: 'SAREES',
    image: './sale pics/how-smart-is-a-maine-coon-cat-featured.jpg',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    title: 'BIG GUY',
    image: './sale pics/Why-Is-My-Maine-Coon-Vibrating-1200cp.jpeg',
    price: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  }


]

var postHTML = " ";

for (var i = 0; i < shop.length; i++) {
  var item = '<div class="items">' +
    '<div class="img img1">' +
    '<img src="' + shop[i].image + '" alt="" />' +
    '</div>' +
    '<div class="name">' + shop[i].title + '</div>' +
    '<div class="price">' + shop[i].price + '</div>' +
    '<div class="info">' + shop[i].description + '</div>' +
    '</div>';

  postHTML += item;
}
document.getElementById('market').innerHTML = postHTML
