import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualidad } from './actualidad';

describe('Actualidad', () => {
  let component: Actualidad;
  let fixture: ComponentFixture<Actualidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actualidad],
    }).compileComponents();

    fixture = TestBed.createComponent(Actualidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
