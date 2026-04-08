import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  age: {
    type: String,
    min: 10,
    max: 100,
    required: true
  },
  score: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  }
});

export default mongoose.models.Student || mongoose.model('Student', studentSchema);