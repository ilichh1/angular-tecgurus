import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditorPersonasComponent } from './editor-personas/editor-personas.component';

@NgModule({
  declarations: [
    EditorPersonasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    EditorPersonasComponent
  ]
})
export class PersonasModule {  }