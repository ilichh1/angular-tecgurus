import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorAnimalesComponent } from './editor-animales/editor-animales.component';
import { FormsModule } from '@angular/forms';
import { VisualizadorAnimalComponent } from './visualizador-animal/visualizador-animal.component';

@NgModule({
  declarations: [EditorAnimalesComponent, VisualizadorAnimalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EditorAnimalesComponent
  ]
})
export class AnimalesModule { }
