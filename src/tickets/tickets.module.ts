import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSchema } from './schemas/ticket';
import { TicketController } from './tickets.controller';
import { TicketService } from './tickets.service';
import { TwilioModule } from 'nestjs-twilio';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ticket', schema: TicketSchema }]),
    TwilioModule.forRoot({
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
    }),
  ],
  providers: [TicketService],
  controllers: [TicketController],
})
export class TicketsModule {}
