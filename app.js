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
    description: 'Very lovable and watchs everything'
  },
  {
    title: 'THING',
    image: './sale pics/10-majestic-maine-coon.jpg',
    price: '',
    description: 'Very dark and majestic and relaxed'
  },
  {
    title: 'WATCH',
    image: './sale pics/IMG_7029_JPG.webp',
    price: '',
    description: 'Loves to play and wrestle and chase all over'
  },
  {
    title: 'SIMBA & TIGER',
    image: './sale pics/6-147.webp',
    price: '',
    description: 'inseperable best friends always together'
  },
  {
    title: 'SKULL',
    image: './sale pics/maine-coon-striped-cat.webp',
    price: '',
    description: 'always hiding and pouncing'
  },
  {
    title: 'STRETCH',
    image: './sale pics/802c7ac038cc57852cccd2bf0e1dbd08.jpg',
    price: '',
    description: 'lazyboy alwayys finds comfortable place for nap'
  },
  {
    title: 'MR BIG',
    image: './sale pics/900_HH-Photography-of-Florida_MC781.jpg',
    price: '',
    description: 'very long beautiful coat loves being brushed'
  },
  {
    title: 'SMOKEY & SHADOW',
    image: './sale pics/attachment-Maine-Coon-Cat-Twix-and-Twizzle-bros-rescued-from-Brooklyn-in-Biddeford.jpg',
    price: '',
    description: 'the twins are full of mischief'
  },
  {
    title: 'FLUFF & CHUNK',
    image: './sale pics/mainecoon_of_ig_81897006_118203266355720_1610196586135730123_n-e1578685230120.jpg',
    price: '',
    description: 'always on the hunt no matter the weather'
  },
  {
    title: 'SPIKE',
    image: './sale pics/Maine Coon.2.jpg',
    price: '',
    description: 'everything is new and must be explored'
  },
  {
    title: 'CHASE',
    image: './sale pics/c3f8714ad343b4aaa1d9d9d9bca0e547.jpg',
    price: '',
    description: 'always on the run quick as lightning'
  },
  {
    title: 'HEATHCLIFF',
    image: './sale pics/Orange-Maine-Coon.webp',
    price: '',
    description: 'lapcat always wants to cuddle up'
  },
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
