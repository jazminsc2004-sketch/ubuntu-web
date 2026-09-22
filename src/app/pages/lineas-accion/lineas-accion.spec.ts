import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasAccion } from './lineas-accion';

describe('LineasAccion', () => {
  let component: LineasAccion;
  let fixture: ComponentFixture<LineasAccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineasAccion],
    }).compileComponents();

    fixture = TestBed.createComponent(LineasAccion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
