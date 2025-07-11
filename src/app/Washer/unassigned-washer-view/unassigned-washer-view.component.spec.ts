import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedWasherViewComponent } from './unassigned-washer-view.component';

describe('UnassignedWasherViewComponent', () => {
  let component: UnassignedWasherViewComponent;
  let fixture: ComponentFixture<UnassignedWasherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedWasherViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedWasherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
