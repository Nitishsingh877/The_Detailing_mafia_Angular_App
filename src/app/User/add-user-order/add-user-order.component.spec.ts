import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserOrderComponent } from './add-user-order.component';

describe('AddUserOrderComponent', () => {
  let component: AddUserOrderComponent;
  let fixture: ComponentFixture<AddUserOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
