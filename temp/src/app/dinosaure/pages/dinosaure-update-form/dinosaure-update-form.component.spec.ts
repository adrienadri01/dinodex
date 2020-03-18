import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaureUpdateFormComponent } from './dinosaure-update-form.component';

describe('DinosaureUpdateFormComponent', () => {
  let component: DinosaureUpdateFormComponent;
  let fixture: ComponentFixture<DinosaureUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaureUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaureUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
