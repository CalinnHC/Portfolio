import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingTabComponent } from './floating-tab.component';

describe('FloatingTabComponent', () => {
  let component: FloatingTabComponent;
  let fixture: ComponentFixture<FloatingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatingTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
