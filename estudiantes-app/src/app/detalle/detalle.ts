import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EstudianteService, Resultado } from '../estudiante';

@Component({
  selector: 'app-detalle',
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle implements OnInit {
  resultado?: Resultado;

  constructor(
    private route: ActivatedRoute,
    private servicio: EstudianteService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getEstudiantes().subscribe(lista => {
      const est = lista.find(e => e.id === id);
      if (est) {
        this.resultado = this.servicio.calcular(est);
        this.cdr.detectChanges();
      }
    });
  }
}
