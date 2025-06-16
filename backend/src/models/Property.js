import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  address: String,
  images: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Property', propertySchema);
