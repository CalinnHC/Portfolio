import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorLightComponent } from './cursor-light.component';

describe('CursorLightComponent', () => {
  let component: CursorLightComponent;
  let fixture: ComponentFixture<CursorLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursorLightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursorLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
