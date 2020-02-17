import { Args, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { Message } from './message.model';
import { MessageService } from './message.service';
import { Int } from 'type-graphql';

@Resolver(of => Message)
export class MessageResolver {
  constructor(
    private readonly messageService: MessageService,
  ) {
  }

  @Query(returns => Message, { name: 'message', nullable: true })
  async getMessageById(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.messageService.findById(id);
  }

}
