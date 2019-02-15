import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningBoardViewComponent } from './planning-board-view.component';

describe('PlanningBoardViewComponent', () => {
  let component: PlanningBoardViewComponent;
  let fixture: ComponentFixture<PlanningBoardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningBoardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningBoardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
