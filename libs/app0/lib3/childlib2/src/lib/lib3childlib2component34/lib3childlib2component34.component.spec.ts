import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib2component34Component } from './lib3childlib2component34.component';

describe('Lib3childlib2component34Component', () => {
  let component: Lib3childlib2component34Component;
  let fixture: ComponentFixture<Lib3childlib2component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
