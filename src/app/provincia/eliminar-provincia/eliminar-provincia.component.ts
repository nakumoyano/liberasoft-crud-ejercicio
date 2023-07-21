import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Provincia } from 'src/app/models/provincia';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-eliminar-provincia',
  templateUrl: './eliminar-provincia.component.html',
  styleUrls: ['./eliminar-provincia.component.css'],
})
export class EliminarProvinciaComponent implements OnDestroy {
  @Input() provincia: Provincia;
  @Output() onEliminado = new EventEmitter();

  constructor(private provinciaService: ProvinciaService) {}

  private subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eliminarProvincia() {
    this.subscription.add(
      this.provinciaService.delete(this.provincia).subscribe({
        next: () => {
          this.onEliminado.emit();
          alert('Elimino la provincia correctamente');
        },
        error: () => {
          alert('Error al eliminar');
        },
      })
    );
  }
}
