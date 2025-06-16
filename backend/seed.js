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
  const sampleProps = [
    {
      title: 'Demo House',
      price: 100000,
      description: 'A lovely demo property',
      address: '123 Demo St'
    },
    {
      title: 'City Apartment',
      price: 200000,
      description: 'Modern unit in the city centre',
      address: '456 City Rd'
    },
    {
      title: 'Country Cottage',
      price: 150000,
      description: 'Quiet spot in the countryside',
      address: '789 Country Ln'
    }
  ];

  for (const prop of sampleProps) {
    await Property.create({
      ...prop,
      images: [],
      owner: user._id
    });
  }
  console.log('Seeded');
  await mongoose.disconnect();
}

seed();
