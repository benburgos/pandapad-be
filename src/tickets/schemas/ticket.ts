import * as mongoose from 'mongoose';

export const TicketSchema = new mongoose.Schema({
  url: String,
  subject: String,
  description: String,
  customerId: Number,
  agentId: Number,
  status: String,
  comments: [{ to: String, from: String, body: String }],
});
