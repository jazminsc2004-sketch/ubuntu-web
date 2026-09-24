import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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


  async enviarRegistro(): Promise<void> {

    console.log('BOTÓN ENVIAR PRESIONADO');

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

    console.log('ENVIANDO DATOS:', this.voluntario);

    try {

      const respuesta = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.voluntario)
      });

      console.log('STATUS DEL SERVIDOR:', respuesta.status);

      const texto = await respuesta.text();

      console.log('RESPUESTA DEL SERVIDOR:', texto);

      if (!respuesta.ok) {
        throw new Error(
          `El servidor respondió con código ${respuesta.status}`
        );
      }

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

    } catch (error) {

      console.error('ERROR AL ENVIAR REGISTRO:', error);

      this.error =
        'No se pudo enviar el registro. Verifica que el servidor esté funcionando.';

    } finally {

      this.enviando = false;

    }
  }
}