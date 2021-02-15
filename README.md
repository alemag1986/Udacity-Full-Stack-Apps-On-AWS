# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

This repository host image filtering microservice code.


### Prerequisits 

1. Node JS - version 12
2. Elastic Beanstalk command line interface (CLI) to deploy in AWS Elastic Beanstalk. [Docs.](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html) 

### Setup Node Environment

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Endpoints

- `/filteredimage?image_url=<pass a image url>`
- `/filteredimage-auth?image_url=<pass a image url>`

### Deploying your system
//TODO
To deploy the microservice using AWS Elastic Beanstalk follow the process:
1. Run `eb init` to create a new application.
2. Rub `eb create` to create a new environment to deploy your image-filter service.
3. Use `eb deploy` to push changes.

![EB-Capture](deployment_screenshots/EXAMPLE_PLEASE_MAKE_YOUR_OWN.png)

### Authentication

//TODO
Prevent requests without valid authentication headers.
> !!NOTE if you choose to submit this, make sure to add the token to the postman collection and export the postman collection file to your submission so we can review!

### Custom Domain Name

//TODO
Add your own domain name and have it point to the running services (try adding a subdomain name to point to the processing server)
> !NOTE: Domain names are not included in AWS’ free tier and will incur a cost.
