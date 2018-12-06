import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// MODULOS
import { PersonasModule } from './personas/personas.module';
import { AnimalesModule } from './animales/animales.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { ComponenteOneComponent } from './componente-one/componente-one.component';
import { ComponenteTwoComponent } from './componente-two/componente-two.component';
import { NotFoundComponent } from './not-found/not-found.component';

const rutas: Routes = [
  { path: 'componente-1', component: ComponenteOneComponent },
  { path: 'componente-2/:id', component: ComponenteTwoComponent },
  { path: '', redirectTo: '/componente-1', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

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
    RouterModule.forRoot( rutas )
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
