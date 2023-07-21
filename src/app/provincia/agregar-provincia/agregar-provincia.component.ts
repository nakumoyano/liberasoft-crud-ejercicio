import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Provincia } from 'src/app/models/provincia';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-agregar-provincia',
  templateUrl: './agregar-provincia.component.html',
  styleUrls: ['./agregar-provincia.component.css'],
})
export class AgregarProvinciaComponent implements OnInit {
  formulario: FormGroup;

  isEdit: boolean = false;

  provincia: Provincia;

  private subscription = new Subscription();

  constructor(
    private provinceService: ProvinciaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      CP: [, [Validators.required]],
      ID: [, [Validators.required]],
      CIUDADID: [, [Validators.required]],
      PROVINCIA: [, Validators.required],
    });

    this.cargar();
  }

  guardar() {
    if (this.formulario.valid) {
      this.subscription.add(
        this.provinceService.addProvince(this.formulario.value).subscribe({
          next: (r: Provincia) => {
            alert('Se registro la provincia con exito');
            this.router.navigate(['']);
          },
          error: (e) => {
            console.error(e);
          },
        })
      );
    } else {
      alert('Complete los campos obligatorios');
    }
  }

  editar() {
    if (this.formulario.valid) {
      let body = this.formulario.value as Provincia;
      body.ID = this.provincia.ID;
      this.subscription.add(
        this.provinceService.updateProvince(body).subscribe({
          next: (r: Provincia) => {
            alert('Edito la provincia correctamente');
            this.router.navigate(['']);
          },
          error: (e) => {
            alert('Error al editar la provincia');
            console.error(e);
          },
        })
      );
    } else {
      alert('Complete los campos obligatorios');
    }
  }

  cargar(): void {
    this.activatedRoute.params.subscribe((e) => {
      let ID = e['ID'];
      if (ID) {
        this.isEdit = true;
        this.provinceService.getProvinciaById(ID).subscribe((es) => {
          this.provincia = es;
          this.formulario.patchValue(this.provincia);
        });
      } else {
        this.isEdit = false;
      }
    });
  }

  get controlCp(): FormControl {
    return this.formulario.controls['CP'] as FormControl;
  }
  get controlID(): FormControl {
    return this.formulario.controls['ID'] as FormControl;
  }

  get controlCiudadId(): FormControl {
    return this.formulario.controls['CIUDADID'] as FormControl;
  }

  get controlProvincia(): FormControl {
    return this.formulario.controls['PROVINCIA'] as FormControl;
  }
}
