import express from 'express';
import multer from 'multer';
import Property from '../models/Property.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

router.get('/', async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

router.get('/:id', async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) return res.status(404).json({ error: 'Not found' });
  res.json(property);
});

router.post('/', auth, upload.array('images', 10), async (req, res) => {
  const imgs = req.files.map(f => f.path);
  const property = await Property.create({
    ...req.body,
    images: imgs,
    owner: req.userId
  });
  // send email to admin for moderation
  if (process.env.SMTP_USER) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: 'New property submitted',
      text: property.title
    });
  }
  res.json(property);
});

router.put('/:id', auth, upload.array('images', 10), async (req, res) => {
  const imgs = req.files.map(f => f.path);
  const property = await Property.findByIdAndUpdate(
    req.params.id,
    { ...req.body, $push: { images: { $each: imgs } } },
    { new: true }
  );
  res.json(property);
});

router.delete('/:id', auth, async (req, res) => {
  await Property.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
