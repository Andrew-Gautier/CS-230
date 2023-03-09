import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyJobberComponent } from './why-jobber.component';

describe('WhyJobberComponent', () => {
  let component: WhyJobberComponent;
  let fixture: ComponentFixture<WhyJobberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyJobberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyJobberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
