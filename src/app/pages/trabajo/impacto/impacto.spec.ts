import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Impacto } from './impacto';

describe('Impacto', () => {
  let component: Impacto;
  let fixture: ComponentFixture<Impacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Impacto],
    }).compileComponents();

    fixture = TestBed.createComponent(Impacto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
