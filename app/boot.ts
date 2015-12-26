import {bootstrap}         from 'angular2/platform/browser';
import {ROUTER_PROVIDERS}  from 'angular2/router';
import {AppComponent}      from './app.component';
import {HeroService}       from './heroes/hero.service';
bootstrap(AppComponent, [
  HeroService,
  ROUTER_PROVIDERS
]);