import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbankerComponent } from './addbanker.component';

describe('AddbankerComponent', () => {
  let component: AddbankerComponent;
  let fixture: ComponentFixture<AddbankerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbankerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbankerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
