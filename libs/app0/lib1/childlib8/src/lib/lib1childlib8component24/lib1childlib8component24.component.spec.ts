import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component24Component } from './lib1childlib8component24.component';

describe('Lib1childlib8component24Component', () => {
  let component: Lib1childlib8component24Component;
  let fixture: ComponentFixture<Lib1childlib8component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
