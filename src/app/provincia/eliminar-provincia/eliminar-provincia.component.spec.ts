import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProvinciaComponent } from './eliminar-provincia.component';

describe('EliminarProvinciaComponent', () => {
  let component: EliminarProvinciaComponent;
  let fixture: ComponentFixture<EliminarProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
