import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import { Construct } from 'constructs';
import { CdkWorkshopSQSStack } from './stack/sqs-stack';
import { CdkWorkshopSNSStack } from './stack/sns-stack';
import { CdkWorkshopDDBStack } from './stack/dynamodb-stack';

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create all stacks
    new CdkWorkshopDDBStack(this, 'ddbStack', props)
    const sqsStack = new CdkWorkshopSQSStack(this, 'sqsStatckId', props);
    const snsStack = new CdkWorkshopSNSStack(this, 'snsStatckId', props);

    // Add subscription to sqs
    snsStack.workshopSNSTopic.addSubscription(new subs.SqsSubscription(sqsStack.workshopQueue));
  }
}
