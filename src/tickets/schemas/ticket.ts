import * as mongoose from 'mongoose';

export const TicketSchema = new mongoose.Schema({
  to: String,
  from: String,
  body: String,
  status: String,
  comments: [{ from: String, body: String }],
});
