import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.bl.network{
   export class Publisher extends Participant {
      userId: string;
      name: string;
      email: string;
      firstName: string;
      lastName: string;
   }
   export class Subscriber extends Participant {
      userId: string;
      name: string;
      email: string;
      firstName: string;
      lastName: string;
   }
   export class Topic extends Asset {
      topicId: string;
      value: string;
      messages: Message[];
   }
   export class Message extends Asset {
      messageId: string;
      owner: Publisher;
      value: string;
   }
   export class SubscriberTopic extends Asset {
      topicSubscriberId: string;
      topic: Topic;
      subscriber: Subscriber;
   }
   export class MessageTransaction extends Transaction {
      topic: Topic;
      newMessages: Message[];
   }
   export class TopicEvent extends Event {
      asset: Topic;
      oldMessages: Message[];
      newMessages: Message[];
   }
// }
