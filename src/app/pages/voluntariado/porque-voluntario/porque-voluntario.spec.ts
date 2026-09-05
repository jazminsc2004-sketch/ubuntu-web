import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorqueVoluntario } from './porque-voluntario';

describe('PorqueVoluntario', () => {
  let component: PorqueVoluntario;
  let fixture: ComponentFixture<PorqueVoluntario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorqueVoluntario],
    }).compileComponents();

    fixture = TestBed.createComponent(PorqueVoluntario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
