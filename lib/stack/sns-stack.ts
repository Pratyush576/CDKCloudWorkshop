import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';

export class CdkWorkshopSNSStack extends Stack {
  public readonly workshopSNSTopic: sns.Topic;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create a SNS topic
    this.workshopSNSTopic = new sns.Topic(this, 'CdkWorkshopTopic');
  }
}
