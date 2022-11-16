import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerySongsComponent } from './galery-songs.component';

describe('GalerySongsComponent', () => {
  let component: GalerySongsComponent;
  let fixture: ComponentFixture<GalerySongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalerySongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerySongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
