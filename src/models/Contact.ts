import mongoose, { Document } from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    mobile: {
        type: Number,
        required: true
    },
}, { timestamps: true });

const Contact = mongoose.model<Document>('Contact', ContactSchema);
export default Contact;