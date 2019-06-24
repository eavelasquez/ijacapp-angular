import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manual',
  templateUrl: './user-manual.component.html',
  styles: [`
    .user-page {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
  `]
})
export class UserManualComponent implements OnInit {

  dataFeatures: Feature[] = FEATURES_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface Feature {
  readonly img: string;
  readonly text: string;
  readonly color: string;
  readonly sizeImg: string;
  readonly title: string;
  readonly subtitle: string;
}

const FEATURES_DATA: Feature[] = [
  {
    title: 'Registro de afiliados',
    subtitle: 'Registro eficiente y sencillo',
    text: `Este registro está dispuesto para afiliar una persona natural a la Junta de Acción Comunal,
            como miembro activo que cumpla con el perfil para el crecimiento colectivo.`,
    img: 'assets/img/recurso-6.png',
    color: '#f4f9fc',
    sizeImg: '210px'
  },
  {
    title: 'Búsqueda sencilla',
    subtitle: 'Encuentra fácilmente algún afiliado',
    text: `Busca cualquier registro necesario, con eficiencia.
            Con esta funcionalidad puede tener gran control sobre los registros almacenados.`,
    img: 'assets/img/recurso-5.png',
    color: '#FAF7EB',
    sizeImg: '180px'
  },
  {
    title: 'Registro a comité',
    subtitle: 'Maneja cada comité según lo requerido',
    text: `Registra algún afiliado por medio de una serie de pasos sencillos y comprensibles,
            que mejorará la gestión de cada uno de ellos entre la comunidad.`,
    img: 'assets/img/recurso-4.png',
    color: '#faf7eb',
    sizeImg: '120px'
  },
  {
    title: 'Control de asambleas',
    subtitle: 'Un seguimiento de asistencias a las asambleas',
    text: `Algunas veces es necesaria una evidencia contundente sobre las asambleas realizadas,
            puede registrar esa información sin problemas. Además, poder acceder a esa documentación rápidamente en cualquier momento.`,
    img: 'assets/img/recurso-3.png',
    color: '#EDF8F5',
    sizeImg: '120px'
  },
  {
    title: 'Seguridad garantizada',
    subtitle: 'Almacenamiento caracterizado y restringido',
    text: `El depositar información vital de cada persona es un asunto serio, por lo tanto,
            se garantiza proteger esta información confidencial con un sistema de seguridad efectivo contra actos maliciosos.`,
    img: 'assets/img/recurso-2.png',
    color: '#EDF8F5',
    sizeImg: '150px'
  },
  {
    title: 'Fácil almacenamiento',
    subtitle: 'Alojamiento de datos',
    text: `Almacene aquella información en un deposito de fácil acceso.
            Algunas veces se puede pasar por un momento complicado al perder el archivo donde guarda información, y por eso,
              al almacenar esta información en una nube podrá obtener una copia de seguridad para aquellos casos imprevistos.`,
    img: 'assets/img/recurso-1.png',
    color: '#f4f9fc',
    sizeImg: '180px'
  }
];
