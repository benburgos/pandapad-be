import { Module } from '@nestjs/common';
import { TicketsModule } from './tickets/tickets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthzModule } from './authz/authz.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TicketsModule,
    MongooseModule.forRoot(`${process.env.DATABASE_URL}`, {
      useNewUrlParser: true,
    }),
    AuthzModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
