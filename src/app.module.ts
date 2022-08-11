import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TicketsModule } from './tickets/tickets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthzModule } from './authz/authz.module';
import ConversationsController from './conversations/conversations.controller';
import TwilioService from './twilio/twilio.service';
import DialogflowService from './dialogflow/dialogflow.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
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
