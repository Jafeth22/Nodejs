const mongoose = require('mongoose');
const connectionString = "mongodb+srv://userNode:userPass1@cluster0.w1ktw.mongodb.net/db_test?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true });

const Cat = mongoose.model("Cat", {
    name:String
});

const kitty = new Cat({name:'Garfield'});
kitty.save().then(() => {console.log("Cat has been saved")});

Cat.find().then(console.log);