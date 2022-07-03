const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://error-hunt:divya12A@cluster0.afrxmm1.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });


const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;
