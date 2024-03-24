/** @format */

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export class WidgetService extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const handler = new NodejsFunction(this, 'WidgetHandler', {
      entry: 'resources/widget.js', // Path to the lambda directory
      // functionName: 'handler',
      runtime: lambda.Runtime.NODEJS_18_X, // Path to the lambda directory
      handler: 'handler',
      // tracing: lambda.Tracing.ACTIVE,
    });

    const api = new apigateway.RestApi(this, 'widgets-api', {
      restApiName: 'Widget Service',
      description: 'This service serves widgets.',
    });

    const getWidgetsIntegration = new apigateway.LambdaIntegration(handler);

    api.root.addMethod('GET', getWidgetsIntegration);
  }
}
