import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-editor-personas',
  templateUrl: './editor-personas.component.html',
  styleUrls: ['./editor-personas.component.css']
})
export class EditorPersonasComponent implements OnInit {
  private personas: Persona[];
  private personasIndex = 0;
  private personaSeleccionada: Persona;

  constructor() { }

  ngOnInit() {
    this.inicializarPersonas();
    this.setPersona();
  }
  
  private setPersona(): void {
    this.personaSeleccionada = this.personas[this.personasIndex];
  }

  private siguientePersona(): void {
    if (this.personasIndex == this.personas.length - 1) {
      this.personasIndex = 0;
    } else {
      this.personasIndex++;
    }
    this.setPersona();
  }

  private previaPersona(): void {
    if(this.personasIndex == 0) {
      this.personasIndex = this.personas.length - 1;
    } else {
      this.personasIndex--;
    }
    this.setPersona();
  }

  private inicializarPersonas(): void {
    this.personas = [
      new Persona(0, 'Ilich', 'Arredondo'),
      new Persona(1, 'Paco', 'El Chato'),
      new Persona(2, 'Sebastian', 'Algo'),
      new Persona(3, 'Eleco', 'Loco'),
      new Persona(4, 'Leonardo', 'DiDavinchi'),
      new Persona(5, 'La', 'Brittany')
    ];
  }

  private mostrarPersona(): void {
    window.alert(this.personaSeleccionada.toString());
  }

}
