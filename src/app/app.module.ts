import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULOS
import { PersonasModule } from './personas/personas.module';
import { AnimalesModule } from './animales/animales.module';

// COMPONENTES
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
    AnimalesModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
