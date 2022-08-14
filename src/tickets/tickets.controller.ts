import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { TicketService } from './tickets.service';
import { CreateTicketDTO } from './dto/create-ticket.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';
import { AuthGuard } from '@nestjs/passport';

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

  @Get('/:ticketId')
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

  @Get('')
  async getTickets(@Res() res) {
    const tickets = await this.ticketService.getTickets();
    return res.status(HttpStatus.OK).json(tickets);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/edit')
  async editTicket(
    @Res() res,
    @Query('ticketId', new ValidateObjectId()) ticketId,
    @Body() createTicketDTO: CreateTicketDTO,
  ) {
    const editedTicket = await this.ticketService.editTicket(
      ticketId,
      createTicketDTO,
    );
    editedTicket.comments.push(createTicketDTO);
    editedTicket.save();
    if (!editedTicket) {
      throw new NotFoundException('Ticket does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Ticket has been successfully updated!',
      ticket: editedTicket,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/delete')
  async deleteTicket(
    @Res() res,
    @Query('ticketId', new ValidateObjectId()) ticketId,
  ) {
    const deletedTicket = await this.ticketService.deleteTicket(ticketId);
    if (!deletedTicket) {
      throw new NotFoundException('Ticket does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Ticket has been deleted!',
      ticket: deletedTicket,
    });
  }
}
