import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { EditorPersonasComponent } from './editor-personas/editor-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    EditorPersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
