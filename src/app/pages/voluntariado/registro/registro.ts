import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  voluntario = {
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    edad: null as number | null,
    ciudad: '',
    perfil: '',
    interes: '',
    experiencia: '',
    disponibilidad: '',
    consentimiento: false
  };

  mensaje = '';
  error = '';
  enviando = false;

  private apiUrl = 'http://localhost:8080/api/voluntarios';

  constructor(private http: HttpClient) {}

  enviarRegistro(): void {

    this.mensaje = '';
    this.error = '';

    if (
      !this.voluntario.nombres ||
      !this.voluntario.apellidos ||
      !this.voluntario.correo ||
      !this.voluntario.telefono ||
      !this.voluntario.perfil ||
      !this.voluntario.interes
    ) {
      this.error = 'Completa todos los campos obligatorios.';
      return;
    }

    if (!this.voluntario.consentimiento) {
      this.error = 'Debes aceptar el consentimiento para continuar.';
      return;
    }

    this.enviando = true;

    this.http.post(this.apiUrl, this.voluntario).subscribe({

      next: () => {

        this.mensaje =
          '¡Registro enviado correctamente! Gracias por querer formar parte de Ubuntu.';

        this.voluntario = {
          nombres: '',
          apellidos: '',
          correo: '',
          telefono: '',
          edad: null,
          ciudad: '',
          perfil: '',
          interes: '',
          experiencia: '',
          disponibilidad: '',
          consentimiento: false
        };

        this.enviando = false;
      },

      error: (error) => {

        console.error('Error al enviar registro:', error);

        this.error =
          'No se pudo enviar el registro. Verifica que el servidor esté funcionando.';

        this.enviando = false;
      }

    });
  }
}