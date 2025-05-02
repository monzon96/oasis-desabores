import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // ⬅️ Importa esto

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule], // ⬅️ Agrégalo aquí
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuAbierto: boolean = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  closeMenu() {
    this.menuAbierto = false;
  }
}
