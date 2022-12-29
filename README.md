# AWS Lambda Starter with Serverless Framework

Beginners guide to setting up AWS Lambda API with Serverless Framework, Node.js, TypeScript and more.

[Read Full Article](https://mirzaleka.medium.com/getting-started-with-aws-lambda-serverless-framework-f06b50052cb0)

## Getting Started

### Environment Setup

* Install Node.js on your machine
* Install AWS-CLI on your machine

### Setup AWS Permissions

* Log in AWS Console
* Create IAM User with Admin permissions 
* Copy *access key id* and *secret key*

### Setup Packages

Install Serverless Framework

`$ npm i -g serverless`

Authenticate with AWS using previously aquired access and secret key

`$ sls config credentials --provider aws --key access_key_id --secret secret_key`

## Get hands on

Clone this repository.

Install dependencies:

`npm i`

Run the app on localhost

`npm run dev`

Deploy to production (to your AWS account)

`npm run deploy`

Upon deploying, AWS will wire up all of the resources in a CloudFormation stack, expose API Gateway endpoints and setup CloudWatch for monitoring.

