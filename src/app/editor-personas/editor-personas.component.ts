import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-editor-personas',
  templateUrl: './editor-personas.component.html',
  styleUrls: ['./editor-personas.component.css']
})
export class EditorPersonasComponent implements OnInit {
  // private persona: Persona;
  private personas: Persona[] = [];
  private idPersonas: number = 0;
  private personaSelected: Persona;

  constructor() { }

  ngOnInit() {
    this.personas.push(
      new Persona(0, 'Ilich', 'Arredondo', '26/06/1998'),
      new Persona(1, 'Paco', 'El Chato', '01/06/1990'),
      new Persona(2, 'Francisco', 'Lerdo', '01/01/1995')
    );
    this.setPersona();
  }

  setPersona() {
    this.personaSelected = this.personas[this.idPersonas];
  }

  onPreviousPersona() {
    if (this.idPersonas == 0) {
      this.idPersonas = this.personas.length - 1;
    } else {
      this.idPersonas--;
    }

    this.setPersona();
  }

  onNextPersona() {
    if (this.idPersonas == (this.personas.length - 1)) {
      this.idPersonas = 0;
    } else {
      this.idPersonas++;
    }
    this.setPersona();
  }

  onShowPersonaObject() {
    window.alert(this.personaSelected.toString());
  }

}
