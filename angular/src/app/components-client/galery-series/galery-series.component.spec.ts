import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerySeriesComponent } from './galery-series.component';

describe('GalerySeriesComponent', () => {
  let component: GalerySeriesComponent;
  let fixture: ComponentFixture<GalerySeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalerySeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerySeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
