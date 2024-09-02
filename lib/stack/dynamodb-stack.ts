import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as ddb from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs';

export class CdkWorkshopDDBStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create DDB
    const cdkworkshopddb = new ddb.Table(this, "CdkWorkshopDDB", {
      partitionKey: {
        name: "id",
        type: ddb.AttributeType.STRING
      },
    })

  }
}
