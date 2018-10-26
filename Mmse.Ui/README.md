# Enterprise.Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Angular CLI

* You can add new components and services programmatically with Angular CLI. Open command prompt and type....
	* To generate service "ng generate service services/YourServiceName"
	* To generate component "ng generate component components/YourComponentName". You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
	* This will generate .ts and .spec.ts files for you in both cases. For components, it will also generate html and css files.
	* Full docs at : https://cli.angular.io/
  * You can also get more help on the Angular CLI by using `ng help` or checking out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Node.js

Must have latest version of Node.js installed (https://nodejs.org/en/) -- probably at least v. 6.0.0...

## Build

* To build and run project
  * Restore NuGet Packages on Solution
  * Open command prompt 
    * Type "npm install" (This will build your node_modules folder and get all your dependencies and typings)
  * Type "npm run dist" (This will compile Angular code. Use instead of ng serve as it moves code to web project)
  * At this point, you should be able to build and debug project
  * The build artifacts will be stored in the `dist/` directory.  
	* Then for continuous build, type "npm run serve"
  * To start up Jest for TDD, again open command prompt and type "npm run test"
  * To build for production, open command prompt and type "npm run dist:prod"

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://facebook.github.io/jest/).

# Enterprise Stack
Security Implementation using Active Directory and OAuth/OWIN

# Technology Stack
## Package Management
* Nuget (for C#/Server Side packages)
* NPM (for JS/CSS/Client Side packages)

## Development
* Server Side 
  * C#
  * WebApi
  * AutoFac (IoC Container)
  * Fluent NHibernate (ORM Tool)
  * OAUTH/OWIN Middleware Implementation
* Client Side
  * Typescript (Staticly typed, Class-based Transcompiler to JavaScript)
  * Angular 5 (MVVM Framework)
  * Angular CLI (Command Line Interface for Angular)
  * ReactiveX (Observables)
* UI/UX
  * Angular Material (Material Design based UI Component Library)
  * Angular Flex Grid (Responsive Grid Framework)
  * NGX Charts (D3JS based Charting Library)
  * Font Awesome 5 (Icon Library)

## Testing
 * Server Side
   * MsTest (Testing Framework)
   * Sqlite - InMemory Database configuration (Used in unit testing)
 * Client Side
   * Jest (w/ Jasmine) – JavaScript/TypeScript Test Framework
   * Istanbul (Jest code coverage)
