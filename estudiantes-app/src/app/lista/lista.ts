import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EstudianteService, Estudiante } from '../estudiante';

@Component({
  selector: 'app-lista',
  imports: [RouterLink],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista implements OnInit {
  estudiantes: Estudiante[] = [];

  constructor(private servicio: EstudianteService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.servicio.getEstudiantes().subscribe(data => {
      this.estudiantes = data;
      this.cdr.detectChanges();
    });
  }
}
