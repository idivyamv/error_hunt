const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://error-hunt:divya12A@cluster0.afrxmm1.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;
