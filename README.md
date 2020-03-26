# demo-gql-ui

This demo is a minimal React Typescript application providing a simple UI that acesses GraphQL API endpoints.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Environment](#environment)
4. [Next Steps](#next-steps)
5. [Other Demos](#other-demos)
6. [Contact Developer](#contact-developer)

## Introduction

This very light application serves as simple demo of several technologies and best-practices with respect to React and GraphQL development. It is designed to operate alongside the GraphQL server provided by the demo-gql application.

## Features

(https://github.com/andyfrith/demo-gql-ui/greetings.png)

A list of all greetings in the database is diplayed when opening [http://localhost:3000/](http://localhost:3000/) in the browser.

### Tyepscript

Why TypeScript? Because, use of types lends itself to using highly-productive development tools and practices; such as, static checking and code refactoring during JavaScript development. Additionally, there is great support for TypeScript in the development community.

### React

Why React? Because there is no better JavaScript library for building the best user interfaces!

### GraphQL

All GraphQL queries and mutations are made using the [graphql-request](https://github.com/prisma-labs/graphql-request) GraphQL client.

## Environment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm install`

Installs the necessary modules required to build and run the application.

#### `npm generate`

Generates GraphQL schema by running the the [GraphQL Code Generator](https://graphql-code-generator.com/). The GraphQL server [demo-gql](https://github.com/andyfrith/demo-gql) must be available at [http://localhost:5002/graphql](http://localhost:5002/graphql) for code generation to purposes.

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Next Steps

- Authentication
- Relay and the Connections pattern

Add examples of client-side pagination using Relay.

## Other Demos

[demo-gql](https://github.com/andyfrith/demo-gql) - the GraphQL server counterpart- a minimal Node.js Typescript application providing a GraphQL API

[react-portal](https://github.com/andyfrith/react-portal) - a React Redux application that provides simple user management tasks upon successful JWT authentication

[greasy-spoon-pos](https://github.com/andyfrith/greasy-spoon-pos) - a React Redux application that provides minimal features of a very basic restaurant Point of Sale system

[goodapplemedia.com](https://github.com/andyfrith/goodapplemedia.com) - a responsive website created with HTML5, Foundation CSS, and ES6 that demonstrates an exceptional and desirable user experience

## Contact Developer

I'm driven to deliver exemplary User Experiences and sound application architectures. I enjoy solving customer problems with excellent design and engineering- to greatly affect business success.

[Portfolio](http://goodapplemedia.com)

[Email: afrith.denver.usa@gmail.com](mailto:afrith.denver.gmail.com)

[LinkedIn](https://www.linkedin.com/in/goodapplemedia/)
