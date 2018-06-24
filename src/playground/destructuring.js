// object destructuring

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName='Self-Published'} = book.publisher;

console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper Street', 'Columbus', 'Ohio', '42310'];
const [, city = 'New York', ,zip] = address; // name are matched by position

console.log(`Your are in ${city}, ${zip}, ${zip}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [drink, , mediumPrice = 'free'] = item;
console.log(`A medium ${drink} costs ${mediumPrice}`);