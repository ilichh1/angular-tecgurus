import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from './persona';

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
    this.persona = this.service.getPersonaSeleccionada();
  }

  private getAllPersonas(): Persona[] {
    return this.service.getAllPersonas();
  }

  onMostrarPersona(): void {
    this.service.alertarPersonaSeleccionada();
  }
  
  onSiguientePersona(): void {
    this.service.siguientePersona();
    this.updatePersona();
  }

  onPreviaPersona(): void {
    this.service.previaPersona();
    this.updatePersona();
  }

}
