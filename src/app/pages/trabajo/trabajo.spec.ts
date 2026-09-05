import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trabajo } from './trabajo';

describe('Trabajo', () => {
  let component: Trabajo;
  let fixture: ComponentFixture<Trabajo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trabajo],
    }).compileComponents();

    fixture = TestBed.createComponent(Trabajo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
