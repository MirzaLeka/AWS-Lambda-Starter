import { APIGatewayEvent } from 'aws-lambda';

import middy from '@middy/core';

import httpErrorHandler from '@middy/http-error-handler';
import errorLogger from '@middy/error-logger';
import createError from 'http-errors';

export const hello = middy(async (event: APIGatewayEvent) => {
  if (event.requestContext.routeKey?.includes('POST')) {
    if (!event.body) {
      throw createError(400, 'Field "body" is required!');
    }

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: 'Resource created!',
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from AWS Lambda with TypeScript on Serverless Framework!',
    }),
  };
})
  .use(httpErrorHandler())
  .use(errorLogger());
