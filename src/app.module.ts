import { Module } from '@nestjs/common';
import { TicketsModule } from './tickets/tickets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthzModule } from './authz/authz.module';
import { TwilioService } from './twilio/twilio.service';

@Module({
  imports: [
    TicketsModule,
    MongooseModule.forRoot(
      'mongodb+srv://SEI:ePQZjyECSisqCJZj@sei.4ivtg.mongodb.net/pandaPad?retryWrites=true&w=majority',
      { useNewUrlParser: true },
    ),
    AuthzModule,
  ],
  controllers: [],
  providers: [TwilioService],
})
export class AppModule {}
