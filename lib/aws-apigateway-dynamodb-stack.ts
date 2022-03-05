import { Construct, RemovalPolicy, Stack, StackProps } from '@aws-cdk/core';
import { AttributeType, BillingMode } from '@aws-cdk/aws-dynamodb';

import { ApiGatewayToDynamoDBProps, ApiGatewayToDynamoDB } from "@aws-solutions-constructs/aws-apigateway-dynamodb";
import { EndpointType } from '@aws-cdk/aws-apigateway';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsApigatewayDynamodbStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const apigw_dynamodb_props: ApiGatewayToDynamoDBProps = {
      dynamoTableProps: {
        partitionKey: {name: "id", type: AttributeType.STRING },
        removalPolicy: RemovalPolicy.DESTROY,
      },
      apiGatewayProps: {
        restApiName: "DynamodbApi",
      }
    };

    new ApiGatewayToDynamoDB(this, "ApiGatewayDynamodb", apigw_dynamodb_props);
  }
}
