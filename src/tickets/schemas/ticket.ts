import * as mongoose from 'mongoose';

export const TicketSchema = new mongoose.Schema({
  to: String,
  from: String,
  body: String,
  status: String,
  comments: [{ to: String, from: String, body: String }],
});
