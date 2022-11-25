import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt01Component } from './bt01.component';

describe('Bt01Component', () => {
  let component: Bt01Component;
  let fixture: ComponentFixture<Bt01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bt01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bt01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
