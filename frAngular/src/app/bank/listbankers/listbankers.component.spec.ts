import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbankersComponent } from './listbankers.component';

describe('ListbankersComponent', () => {
  let component: ListbankersComponent;
  let fixture: ComponentFixture<ListbankersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbankersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbankersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
