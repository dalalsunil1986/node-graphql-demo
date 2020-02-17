import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {

  constructor(
    private readonly messageService: MessageService,
  ) {
  }

  @Get()
  async getAllMessages() {
    const messages = await this.messageService.findAll();

    return { messages };
  }

  @Get(':id')
  async getMessageById(@Param('id') id: number) {
    const message = await this.messageService.findById(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return { message };
  }
}
