import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  city: String,
  state: String,
  message: String,
}, { timestamps: true });


const Form = mongoose.model('Form', formSchema);

export default Form;