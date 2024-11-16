const mongoose = require('mongoose');


async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

connect().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error(err);
});

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});

const User = mongoose.model('User', userSchema); 
const Employee = mongoose.model('Employee', userSchema);

const user1 = new User({name: 'John', age: 25, email: 'john@gmail.com'});
const user2 = new User({name: 'Jane', age: 30, email: 'jane@gmail.com'});
const employee1 = new Employee({name: 'Tom', age: 35, email: 'tom@gmail.com'});
const employee2 = new Employee({name: 'Jerry', age: 40, email: 'jerry@gmail.com'});

user1.save().then(() => {
    console.log('User1 saved');
}).catch(err => {
    console.error(err);
});
user2.save().then(() => {    
    console.log('User2 saved');
}).catch(err => {
    console.error(err);
});
employee1.save().then(() => {
    console.log('Employee1 saved');
}).catch(err => {
    console.error(err);
});
employee2.save().then(() => {
    console.log('Employee2 saved');
}).catch(err => {
    console.error(err);
});

User.insertMany([
    {name: 'Alice', age: 20, email: 'alice@gmail.com'},
    {name: 'Bob', age: 22, email: 'bog@gmail.com'},
    {name: 'Charlie', age: 24, email: 'charlie@gmail.com'},
    {name: 'David', age: 26, email: 'david@gmail.com'},
]).then(() => {
    console.log('Users saved');
}).catch(err => {
    console.error(err);
}); 

User.find({}).then((res)=>{
    console.log(res);
}).catch(err => {
    console.error(err);
}
);

User.updateOne({name: 'John'}, {age: 21}).then((res) => {
    console.log(res);
}).catch(err => {
    console.error(err);
});

User.updateMany({age: {$gt:21}}, {age: 22}).then((res) => {
    console.log(res);
}).catch(err => {
    console.error(err);
});

User.findOneAndUpdate({name: 'Jane'}, {age: 31}).then((res) => {
    console.log(res);
}).catch(err => {  
    console.error(err);
});
User.findOneAndUpdate({name: 'Jane'}, {age: 31},{new : true}).then((res) => {
    console.log(res);
}).catch(err => {  
    console.error(err);
});

User.deleteOne({name: 'Alice'}).then((res) => {
    console.log(res);
}).catch(err => {
    console.error(err);
});

User.deleteMany({age:48}).then((res) => {
    console.log(res);
}).catch(err => {
    console.error(err);
});

User.findByIdAndDelete('672d06c752e9d17e57aa25bd').then((res) => {
    console.log(res);
}).catch(err => {
    console.error(err);
});
