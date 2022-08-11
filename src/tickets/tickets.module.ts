import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSchema } from './schemas/ticket';
import { TicketController } from './tickets.controller';
import { TicketService } from './tickets.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ticket', schema: TicketSchema }]),
  ],
  providers: [TicketService],
  controllers: [TicketController],
})
export class TicketsModule {}
