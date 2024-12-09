import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPhComponent } from './carousel-ph.component';

describe('CarouselPhComponent', () => {
  let component: CarouselPhComponent;
  let fixture: ComponentFixture<CarouselPhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselPhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
