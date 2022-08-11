import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
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

  @Get('tickets/:ticketId')
  async getTicket(
    @Res() res,
    @Param('ticketId', new ValidateObjectId()) ticketId,
  ) {
    const ticket = await this.ticketService.getTicket(ticketId);
    if (!ticket) {
      throw new NotFoundException('Ticket does not exist!');
    }
    return res.status(HttpStatus.OK).json(ticket);
  }
}
