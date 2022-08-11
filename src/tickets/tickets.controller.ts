import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { TicketService } from './tickets.service';
import { CreateTicketDTO } from './dto/create-ticket.dto';

@Controller('tickets')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @Post('/create')
  async createTicket(@Res() res, @Body() createTicketDTO: CreateTicketDTO) {
    const newTicket = await this.ticketService.createTicket(createTicketDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Ticket has been successfully created!',
      ticket: newTicket,
    });
  }
}
