import { APIGatewayEvent } from 'aws-lambda';

import middy from '@middy/core';

import httpErrorHandler from '@middy/http-error-handler';
import errorLogger from '@middy/error-logger';
import createError from 'http-errors';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';

export const hello = middy(async (event: APIGatewayEvent) => {

  const { DUMMY_API_KEY } = process.env; // Object destructuring

  console.log('process.env.SECRET_API_KEY :>> ', process.env.SECRET_API_KEY);

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
      message: `Hello from AWS Lambda with TypeScript on Serverless Framework and this is the DUMMY_API_KEY: >${DUMMY_API_KEY}<`,
    }),
  };
})
  .use(httpErrorHandler()) // mandatory for handling errors with status codes
  .use(errorLogger())
  .use(httpHeaderNormalizer()) // required for httpJsonBodyParser
  .use(httpJsonBodyParser()); // parses event.body from String to JavaScript Object

