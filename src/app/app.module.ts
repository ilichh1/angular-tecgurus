import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULOS
import { PersonasModule } from './personas/personas.module';
import { AnimalesModule } from './animales/animales.module';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { ComponenteOneComponent } from './componente-one/componente-one.component';
import { ComponenteTwoComponent } from './componente-two/componente-two.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    ComponenteOneComponent,
    ComponenteTwoComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    PersonasModule,
    AnimalesModule,
    AppRoutingModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
