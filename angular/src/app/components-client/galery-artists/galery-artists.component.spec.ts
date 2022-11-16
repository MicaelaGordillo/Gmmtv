import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryArtistsComponent } from './galery-artists.component';

describe('GaleryArtistsComponent', () => {
  let component: GaleryArtistsComponent;
  let fixture: ComponentFixture<GaleryArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleryArtistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleryArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
