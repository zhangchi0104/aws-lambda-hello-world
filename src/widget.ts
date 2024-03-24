/** @format */

import {
  Handler,
  APIGatewayAuthorizerEvent,
  APIGatewayProxyEvent,
} from 'aws-lambda';
export const handler: Handler<APIGatewayProxyEvent> = async (
  event,
  context
) => {
  console.log({ event });
  if (event.httpMethod === 'GET') {
    console.log('GET 200 OK');
    return { statusCode: 200, body: 'Hello World', headers: {} };
  } else {
    console.log('OOPS 404 Not Found');
    return { statusCode: 404, body: 'Not Found' };
  }
};
