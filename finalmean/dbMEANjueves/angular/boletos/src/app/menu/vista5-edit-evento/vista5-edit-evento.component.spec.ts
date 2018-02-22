import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista5EditEventoComponent } from './vista5-edit-evento.component';

describe('Vista5EditEventoComponent', () => {
  let component: Vista5EditEventoComponent;
  let fixture: ComponentFixture<Vista5EditEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista5EditEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista5EditEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
