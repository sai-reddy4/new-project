import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytraComponent } from './mytra.component';

describe('MytraComponent', () => {
  let component: MytraComponent;
  let fixture: ComponentFixture<MytraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
