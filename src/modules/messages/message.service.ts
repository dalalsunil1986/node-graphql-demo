import { Injectable } from '@nestjs/common';
import { Message } from './message.model';

@Injectable()
export class MessageService {

  findAll() {
    const message = new Message();
    message.id = 10;
    message.title = "Test";
    return [message];
  }

  findById(id: number) {
    const message = new Message();
    message.id = id;
    message.title = "Test";
    message.sentTime = new Date();
    return message;
  }


}
