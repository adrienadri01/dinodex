import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinodexToolbarComponent } from './dinodex-toolbar.component';

describe('DinodexToolbarComponent', () => {
  let component: DinodexToolbarComponent;
  let fixture: ComponentFixture<DinodexToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinodexToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinodexToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
