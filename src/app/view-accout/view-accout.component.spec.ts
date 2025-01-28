import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccoutComponent } from './view-accout.component';

describe('ViewAccoutComponent', () => {
  let component: ViewAccoutComponent;
  let fixture: ComponentFixture<ViewAccoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAccoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
