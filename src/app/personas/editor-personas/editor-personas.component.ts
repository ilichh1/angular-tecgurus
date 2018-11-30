import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-editor-personas',
  templateUrl: './editor-personas.component.html',
  styleUrls: ['./editor-personas.component.css']
})
export class EditorPersonasComponent implements OnInit {
  private persona: Persona;

  constructor(
    private service: PersonaService
  ) { }

  ngOnInit() {
    this.updatePersona();
  }

  private updatePersona(): void {
    this.persona = this.service.getSelectedPerson();
  }

  onShowPersona(): void {
    this.service.alertPersonAsText();
  }
  
  onNextPersona(): void {
    this.service.siguientePersona();
    this.updatePersona();
  }

  onPreviousPersona(): void {
    this.service.previaPersona();
    this.updatePersona();
  }

  getAllPersonas(): Persona[] {
    return this.service.getAllPersonas();
  }

}