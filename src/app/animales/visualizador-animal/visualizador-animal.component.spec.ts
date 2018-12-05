import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorAnimalComponent } from './visualizador-animal.component';

describe('VisualizadorAnimalComponent', () => {
  let component: VisualizadorAnimalComponent;
  let fixture: ComponentFixture<VisualizadorAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizadorAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizadorAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
