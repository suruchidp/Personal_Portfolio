import Message from '../models/Message.js';

export const submitMessage = async (req, res) => {
  const message = await Message.create(req.body);
  res.status(201).json(message);
};

export const getMessages = async (_req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
};
