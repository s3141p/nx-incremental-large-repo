import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib0component8Component } from './lib3childlib0component8.component';

describe('Lib3childlib0component8Component', () => {
  let component: Lib3childlib0component8Component;
  let fixture: ComponentFixture<Lib3childlib0component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
