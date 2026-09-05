import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionVision } from './mision-vision';

describe('MisionVision', () => {
  let component: MisionVision;
  let fixture: ComponentFixture<MisionVision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisionVision],
    }).compileComponents();

    fixture = TestBed.createComponent(MisionVision);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
