import Message from '../models/Message.js';
import asyncHandler from '../utils/asyncHandler.js';
import { logger } from '../utils/logger.js';

export const sendMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  const saved = await Message.create({ name, email, message });
  logger.info(`New contact message from ${email}`);
  res.status(201).json({ message: 'Message sent successfully', data: saved });
});

export const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

export const markAsRead = asyncHandler(async (req, res) => {
  const message = await Message.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
  if (!message) {
    res.status(404);
    throw new Error('Message not found');
  }
  res.json(message);
});