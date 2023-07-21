import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProvinciaComponent } from './agregar-provincia.component';

describe('AgregarProvinciaComponent', () => {
  let component: AgregarProvinciaComponent;
  let fixture: ComponentFixture<AgregarProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
