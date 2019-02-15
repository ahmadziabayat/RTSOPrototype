import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectrumDisplayViewComponent } from './spectrum-display-view.component';

describe('SpectrumDisplayViewComponent', () => {
  let component: SpectrumDisplayViewComponent;
  let fixture: ComponentFixture<SpectrumDisplayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpectrumDisplayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectrumDisplayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
