import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPersonasComponent } from './editor-personas.component';

describe('EditorPersonasComponent', () => {
  let component: EditorPersonasComponent;
  let fixture: ComponentFixture<EditorPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
