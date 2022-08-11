import { Module } from '@nestjs/common';
import { TicketsModule } from './tickets/tickets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthzModule } from './authz/authz.module';
import { TwilioService } from './twilio/twilio.service';
import { DialogflowService } from './dialogflow/dialogflow.service';
import { ConversationsController } from './conversations/conversations.controller';

@Module({
  imports: [
    TicketsModule,
    MongooseModule.forRoot(
      'mongodb+srv://SEI:ePQZjyECSisqCJZj@sei.4ivtg.mongodb.net/pandaPad?retryWrites=true&w=majority',
      { useNewUrlParser: true },
    ),
    AuthzModule,
  ],
  controllers: [ConversationsController],
  providers: [TwilioService, DialogflowService],
})
export class AppModule {}
