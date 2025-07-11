import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherSidebarComponent } from './washer-sidebar.component';

describe('WasherSidebarComponent', () => {
  let component: WasherSidebarComponent;
  let fixture: ComponentFixture<WasherSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
