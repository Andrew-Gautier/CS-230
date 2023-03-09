import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPhotoComponent } from './landing-photo.component';

describe('LandingPhotoComponent', () => {
  let component: LandingPhotoComponent;
  let fixture: ComponentFixture<LandingPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
