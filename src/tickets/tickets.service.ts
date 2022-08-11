import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket } from './interfaces/ticket.interface';
import { CreateTicketDTO } from './dto/create-ticket.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel('Ticket') private readonly ticketModel: Model<Ticket>,
  ) {}

  async createTicket(createTicketDTO: CreateTicketDTO): Promise<Ticket> {
    const newTicket = await new this.ticketModel(createTicketDTO);
    return newTicket.save();
  }

  async getTicket(ticketId): Promise<Ticket> {
    const ticket = await this.ticketModel.findById(ticketId).exec();
    return ticket;
  }

  async getTickets(): Promise<Ticket[]> {
    const tickets = await this.ticketModel.find().exec();
    return tickets;
  }

  async editTicket(
    ticketId,
    createTicketDTO: CreateTicketDTO,
  ): Promise<Ticket> {
    const editedTicket = await this.ticketModel.findByIdAndUpdate(
      ticketId,
      createTicketDTO,
      { new: true },
    );
    return editedTicket;
  }

  async deleteTicket(ticketId): Promise<any> {
    const deletedTicket = await this.ticketModel.findByIdAndRemove(ticketId);
    return deletedTicket;
  }
}
