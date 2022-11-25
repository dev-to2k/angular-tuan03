import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt02Component } from './bt02.component';

describe('Bt02Component', () => {
  let component: Bt02Component;
  let fixture: ComponentFixture<Bt02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bt02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bt02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
