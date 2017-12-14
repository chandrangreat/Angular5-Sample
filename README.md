# Sample Angular 5 Application

This is a sample Angular application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

### This branch uses data-binding to update the cart counter. Possible issues with this approach could be:

- The parent here is the AppComponent and we have to initialise the cart counter in this component with zero. So the CartComponent does not deal with the cartCounter value as it gets the value from AppComponent through data-binding.

- Correct way to do this would be to have a server in the backend and use services to post the cartCounter increment value to the server and server will increment the value in the database. The CartComponent will have an Observer that will be listening for some change in the cartCounter value and will update in UI when value changes.  

Feel free to comment on this.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
