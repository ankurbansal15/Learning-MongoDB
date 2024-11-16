const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

connect().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error(err);
});

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'Title must be at least 3 characters long'],
        maxlength: [100, 'Title must be less than 100 characters long']
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        minlength: [3, 'Author must be at least 3 characters long'],
        maxlength: [50, 'Author must be less than 50 characters long']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
    },
});

const Book = mongoose.model('Book', bookSchema); 

let book1 = new Book({title: 'The Alchemist', author: 'Paulo Coelho', price: 10});

book1
  .save()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error.errors.price.properties.message);
  });

Book.findOneAndUpdate(
  { author: "The Alchemist" },
  { author: "John Weak" },
  { runValidators: true, new: true },
)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });
