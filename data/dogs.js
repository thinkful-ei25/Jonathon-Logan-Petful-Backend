'use strict';
const Queue = require('../queue');
let Dogs = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2018/07/your-female-german-shepherd-SC-long.jpg',
    imageDescription: 'German shepherd pouncing',
    name: 'Scooby',
    sex: 'Male',
    age: 6,
    breed: 'German Shepherd',
    story: 'Retired police dog'
  },
  {
    imageURL: 'https://cdn1-www.dogtime.com/assets/uploads/gallery/samoyed-dogs-and-puppies/samoyed-dogs-puppies-5.jpg',
    imageDescription: 'Samoyed at the beach',
    name: 'Salt',
    sex: 'Female',
    age: 6,
    breed: 'Samoyed',
    story: 'Picked up from beach'
  }
];
const dogQueue = new Queue();
Dogs.forEach(dog => {
  dogQueue.enqueue(dog);
});

module.exports = dogQueue;