import { Document } from 'mongoose';

export interface Ticket extends Document {
  readonly url: string;
  readonly subject: string;
  readonly description: string;
  readonly customerId: number;
  readonly agentId: number;
  readonly status: string;
  readonly comments: [{ type: string }];
}
