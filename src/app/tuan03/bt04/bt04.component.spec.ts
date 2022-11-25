import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt04Component } from './bt04.component';

describe('Bt04Component', () => {
  let component: Bt04Component;
  let fixture: ComponentFixture<Bt04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bt04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bt04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
