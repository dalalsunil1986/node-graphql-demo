import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './modules/messages/message.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    MessageModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {
}
