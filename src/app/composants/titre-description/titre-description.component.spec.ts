import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreDescriptionComponent } from './titre-description.component';

describe('TitreDescriptionComponent', () => {
  let component: TitreDescriptionComponent;
  let fixture: ComponentFixture<TitreDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitreDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
