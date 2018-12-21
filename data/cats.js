'use strict';
const Queue = require('../queue');
let Cats = [
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://www.petmd.com/sites/default/files/Siamese.jpg',
    imageDescription: 'Siamese cat with nice eyes',
    name: 'Cleo',
    sex: 'Female',
    age: 3,
    breed: 'Siamese',
    story: 'Car accident'
  },
  {
    imageURL: 'https://staticr1.blastingcdn.com/media/photogallery/2018/1/6/660x290/b_620x273/the-balls-more-sleepers-anime-cat_1764511.jpg',
    imageDescription: 'Weird anime cat',
    name: 'Chika',
    sex: 'Female',
    age: 4,
    breed: '2d cat',
    story: 'Escaped the tv world'
  }
];
const catQueue = new Queue();
Cats.forEach(cat => {
  catQueue.enqueue(cat);
});

module.exports = catQueue;