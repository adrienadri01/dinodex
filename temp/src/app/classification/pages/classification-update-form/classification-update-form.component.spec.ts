import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationUpdateFormComponent } from './classification-update-form.component';

describe('ClassificationUpdateFormComponent', () => {
  let component: ClassificationUpdateFormComponent;
  let fixture: ComponentFixture<ClassificationUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
