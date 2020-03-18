import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationTabComponent } from './classification-tab.component';

describe('ClassificationTabComponent', () => {
  let component: ClassificationTabComponent;
  let fixture: ComponentFixture<ClassificationTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
