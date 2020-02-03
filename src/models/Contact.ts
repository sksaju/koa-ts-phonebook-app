import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
}, { timestamps: true })

const Contact = mongoose.model( 'Contact', ContactSchema );
export default Contact;