import { Injectable } from '@angular/core';
import { IncrementadorComponent } from '../../components/incrementador/incrementador.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Progress', url: '/progress' },
        { titulo: 'Graficas', url: '/graficas1' }
      ]
    }
  ];

  constructor() { }
}
