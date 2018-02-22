import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista5NewEventoComponent } from './vista5-new-evento.component';

describe('Vista5NewEventoComponent', () => {
  let component: Vista5NewEventoComponent;
  let fixture: ComponentFixture<Vista5NewEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista5NewEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista5NewEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
