import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PersonasModule } from './personas/personas.module';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
  ],
  imports: [
    BrowserModule,
    PersonasModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
