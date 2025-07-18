import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { Header } from './header/header';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { routes } from './app.routes';

@NgModule({
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      App,
      Header,
      Home,
      Footer
    ]
  })
  export class AppModule {}