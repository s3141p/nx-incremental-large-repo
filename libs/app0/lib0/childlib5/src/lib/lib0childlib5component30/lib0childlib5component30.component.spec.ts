import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component30Component } from './lib0childlib5component30.component';

describe('Lib0childlib5component30Component', () => {
  let component: Lib0childlib5component30Component;
  let fixture: ComponentFixture<Lib0childlib5component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
