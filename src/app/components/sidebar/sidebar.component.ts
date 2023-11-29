import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private authService: AuthService){}

  items = [
    {title: 'Inicio', href: 'dashboard', active: 'active'},
    {title: 'Tarjetas', href: 'dashboard', active: 'text-white'},
    {title: 'Prestamos', href: 'dashboard', active: 'text-white'},
    {title: 'Operaciones', href: 'dashboard', active: 'text-white'},
    {title: 'Te ofrecemos', href: 'dashboard', active: 'text-white'},
    {title: 'Puntos', href: 'dashboard', active: 'text-white'},
    {title: 'Ayuda', href: 'dashboard', active: 'text-white'}
  ]

  logout() {
    this.authService.logout();
  }

}
