import { Field, Int, ObjectType } from 'type-graphql';


@ObjectType()
export class Message {

  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  content: string;

  @Field({ nullable: false })
  sentTime: Date;

  @Field({ nullable: false })
  sentBy: string;
}
