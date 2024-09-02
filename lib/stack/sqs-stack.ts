import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export class CdkWorkshopSQSStack extends Stack {
  public readonly workshopQueue: sqs.Queue;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create a queue
    this.workshopQueue = this.createQueue('CdkWorkshopQueue');
  }

  // Create Queue
  private createQueue(name: string) {
    return new sqs.Queue(this, name, {
        visibilityTimeout: Duration.seconds(300)
    });
  }
}
