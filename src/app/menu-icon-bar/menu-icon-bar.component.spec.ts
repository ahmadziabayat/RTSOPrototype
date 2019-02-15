import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIconBarComponent } from './menu-icon-bar.component';

describe('MenuIconBarComponent', () => {
  let component: MenuIconBarComponent;
  let fixture: ComponentFixture<MenuIconBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuIconBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIconBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
