import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './src/models/User.js';
import Property from './src/models/Property.js';
import bcrypt from 'bcrypt';

dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany();
  await Property.deleteMany();
  const password = await bcrypt.hash('password', 10);
  const user = await User.create({ email: 'demo@example.com', password });
  await Property.create({
    title: 'Demo House',
    price: 100000,
    description: 'A lovely demo property',
    address: '123 Demo St',
    images: [],
    owner: user._id
  });
  console.log('Seeded');
  await mongoose.disconnect();
}

seed();
