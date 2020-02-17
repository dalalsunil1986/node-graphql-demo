import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { MessageController } from './message.controller';

@Module({
  imports: [],
  providers: [ MessageService, MessageResolver ],
  exports: [ MessageService ],
  controllers: [ MessageController ],
})
export class MessageModule {
}
