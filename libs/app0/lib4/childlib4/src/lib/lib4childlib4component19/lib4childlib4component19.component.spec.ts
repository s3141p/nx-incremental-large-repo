import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component19Component } from './lib4childlib4component19.component';

describe('Lib4childlib4component19Component', () => {
  let component: Lib4childlib4component19Component;
  let fixture: ComponentFixture<Lib4childlib4component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component19Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
