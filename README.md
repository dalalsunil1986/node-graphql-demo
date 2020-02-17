## Description

This is a simple node.js app demonstrating GraphQL service.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
$ yarn start
```
The graphql endpoint is then running at http://localhost:8080/graphql.

## Build Docker image

```bash
$ docker build -t ilkka/node-web-app .
```

## Run Docker image

```bash
$ docker run -p 49160:8080 -d ilkka/node-web-app
```
The graphql endpoint is then running at http://localhost:49160/graphql.

## HTTP Post

Create request.json with the following contents

```bash
{"query": "{message(id: 3) {id, title}}"}
```

Do HTTP Post with Curl:

```bash
curl -d @request.json --header "Content-Type: application/json" -X POST http://localhost:8080/graphql
```

It should respond like this:

```bash
{"data":{"message":{"id":3,"title":"Test"}}}
```
