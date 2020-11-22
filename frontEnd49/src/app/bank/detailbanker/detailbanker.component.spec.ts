import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbankerComponent } from './detailbanker.component';

describe('DetailbankerComponent', () => {
  let component: DetailbankerComponent;
  let fixture: ComponentFixture<DetailbankerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailbankerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailbankerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
