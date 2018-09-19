# RoutingCours

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## ======= `CONFIG AND QUICK START`  :  ===========

> import { *RouterModule*, *Routes* } from '@angular/router';
>  const appRoutes: Routes = [{ path: 'home', component: HomeComponent }  ....]
> add your routes to the *RouterModule* : imports: [ RouterModule.forRoot(appRoutes) ... ] using the *forRoot* function
> use *<router-outlet></router-outlet>* to load the content in.

## ======= `TEMPLATE NAVIGATION :`  ============

>   Avoid using *href*="/path" to load your pages .... simply because:  that restart the app , it is not good for user experience and also if we do that we don't  respect the SPA (single page application) concept  :confused: :warning:
> So use : *routerLink* directive : routerLink="/users" or [routerLink]="'/users'" or [routerLink]="['/users']"
>   *Absolute path* (/home-page-path)
>*Relative path* (home-page-path) or (./home-page-path) _ becomes a relative route relative to the current route.
> Styling active route .... *routerLinkActive* = "classe" - more options with *[routerLinkActiveOptions]* = "{ exact: true}"  ...

## ======`NAVIGATING  PROGRAMMATICALLY`  =======

>*Router navigate(['/path']) function*
> By default there is no problem  with relative and absolute path here, bath we can use *relativeTo* parameter that takes *activatedRoute* as a value ...
>*route Snapshot* route.snapchot.params['id'] to fetch url id params

## ======`QUERY PARAMS AND FRAGMENT`  =======

>Query parameters in Angular allow for passing optional parameters across any route in the application. Query params are different from regular route parameters, which are only available on one route and are not optional

>NavigationExtras

>*QueryParams*

>Fragment

>To get the route queryParams use activatedRoute.queryParams snapshot or observable if we want to be reactive ...

## ======`NESTED ROUTES (child)`  =======

>Child Routes or Nested routes are a powerful new feature in the Angular router. Nested routes are routes within other routes ...

>*Children* params

>Don't forget to add ( router-outlet ) to your component.html


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
