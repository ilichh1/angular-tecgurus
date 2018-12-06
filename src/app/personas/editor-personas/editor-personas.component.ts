import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editor-personas',
  templateUrl: './editor-personas.component.html',
  styleUrls: ['./editor-personas.component.css']
})
export class EditorPersonasComponent implements OnInit, OnDestroy{
  private personaSubscription: Subscription;
  private persona: Persona;

  constructor(
    private service: PersonaService
  ) { }

  ngOnInit() {
    this.suscribeToPersona();
  }

  ngOnDestroy() {
    this.personaSubscription.unsubscribe();
  }

  private suscribeToPersona(): void {
    this.persona = this.service.personaSeleccionada;
    this.personaSubscription = this.service.personaObservable.subscribe(
      persona => this.persona = persona
    );
  }

  onShowPersona(): void {
    this.service.alertPersonAsText();
  }
  
  onNextPersona(): void {
    this.service.siguientePersona();
  }

  onPreviousPersona(): void {
    this.service.previaPersona();
  }

  getAllPersonas(): Persona[] {
    return this.service.getAllPersonas();
  }

}