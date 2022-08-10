import { Module } from '@nestjs/common';
import { TicketsModule } from './tickets/tickets.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TicketsModule,
    MongooseModule.forRoot(
      'mongodb+srv://SEI:ePQZjyECSisqCJZj@sei.4ivtg.mongodb.net/pandaPad?retryWrites=true&w=majority',
      { useNewUrlParser: true },
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
