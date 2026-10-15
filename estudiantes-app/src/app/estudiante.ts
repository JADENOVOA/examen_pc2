import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Estudiante {
  id: number;
  nombre: string;
  nota1: number;
  nota2: number;
  nota3: number;
}

export interface Resultado extends Estudiante {
  suma: number;
  promedio: number;
  estado: string;
  observacion: string;
}

@Injectable({ providedIn: 'root' })
export class EstudianteService {
  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>('estudiantes.json');
  }

  calcular(e: Estudiante): Resultado {
    const suma = e.nota1 + e.nota2 + e.nota3;
    const promedio = suma / 3;
    const estado = promedio >= 13 ? 'Aprobado' : 'Desaprobado';

    let observacion: string;
    if (promedio >= 17) observacion = 'Excelente';
    else if (promedio >= 13) observacion = 'Regular';
    else observacion = 'En riesgo';

    return { ...e, suma, promedio, estado, observacion };
  }
}
