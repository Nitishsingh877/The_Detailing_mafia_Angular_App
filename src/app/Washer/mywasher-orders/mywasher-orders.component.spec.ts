import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MywasherOrdersComponent } from './mywasher-orders.component';

describe('MywasherOrdersComponent', () => {
  let component: MywasherOrdersComponent;
  let fixture: ComponentFixture<MywasherOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MywasherOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MywasherOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
