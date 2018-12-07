import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponenteOneComponent } from './componente-one/componente-one.component';
import { ComponenteTwoComponent } from './componente-two/componente-two.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Modulos
import { EventosModule } from './eventos/eventos.module';

const rutas: Routes = [
  { path: 'eventos', loadChildren: () => EventosModule },
  { path: 'componente-1', component: ComponenteOneComponent },
  { path: 'componente-2/:id', component: ComponenteTwoComponent },
  { path: '', redirectTo: '/componente-1', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
