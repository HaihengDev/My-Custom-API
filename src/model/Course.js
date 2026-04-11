import mongoose from 'mongoose';

export const courseSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  lesson: {
    type: Array,
  },
  view: {
    type: Number,
  },
  rating: {
    type: Number,
  }
})