import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt03Component } from './bt03.component';

describe('Bt03Component', () => {
  let component: Bt03Component;
  let fixture: ComponentFixture<Bt03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bt03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bt03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
