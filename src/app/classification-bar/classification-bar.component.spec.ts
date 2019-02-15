import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationBarComponent } from './classification-bar.component';

describe('ClassificationBarComponent', () => {
  let component: ClassificationBarComponent;
  let fixture: ComponentFixture<ClassificationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
