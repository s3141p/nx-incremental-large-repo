import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component1Component } from './lib2childlib2component1.component';

describe('Lib2childlib2component1Component', () => {
  let component: Lib2childlib2component1Component;
  let fixture: ComponentFixture<Lib2childlib2component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
