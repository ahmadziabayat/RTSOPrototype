import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopNavbarComponent } from './cop-navbar.component';

describe('CopNavbarComponent', () => {
  let component: CopNavbarComponent;
  let fixture: ComponentFixture<CopNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
