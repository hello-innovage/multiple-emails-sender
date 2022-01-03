# multiple-emails-sender
# SEND MULTIPLE EMAILS THROW NODEMAILER USING CRONJOB

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

## Installation


Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/hello-innovage/multiple-emails-sender.git
$ cd PROJECT
```

To install and set up the library, run:

```sh
$ npm install
```

Or if you prefer using Yarn:

```sh
$ yarn install
```
## Setup envpirment file

rename env.example file into .env and update the credentials of email server and Mongoose Url

```
MONGO_URI=YOUR_MONGO_URL

email_host=YOUR_EMAIL_HOST
email_port=YOUR_EMAIL_PORT
email_user=YOUR_EMAIL_USER
email_pass=YOUR_EMAIL_PASSWORD

```
## Usage

### Serving the app

```sh
$ npm start
```
