import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorAnimalesComponent } from './editor-animales.component';

describe('EditorAnimalesComponent', () => {
  let component: EditorAnimalesComponent;
  let fixture: ComponentFixture<EditorAnimalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorAnimalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
