import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationAddFormComponent } from './classification-add-form.component';

describe('ClassificationAddFormComponent', () => {
  let component: ClassificationAddFormComponent;
  let fixture: ComponentFixture<ClassificationAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
