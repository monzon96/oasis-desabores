import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductoComponent } from '../../components/card-producto/card-producto.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CardProductoComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  productos = [
    { nombre: 'Frappé de Oreo', precio: 15, imagen: 'assets/imagenes/frapeOreo.jpeg' },
    { nombre: 'Crepas con Nutella', precio: 25, imagen: 'assets/imagenes/crepa.jpeg' },
    { nombre: 'Helados', precio: 5, imagen: 'assets/imagenes/helados.jpeg' },
    { nombre: 'Mango Preparado', precio: 15, imagen: 'assets/imagenes/mangoP.jpeg' },
    { nombre: 'Smoothie de Mango', precio: 15, imagen: 'assets/imagenes/mangosmo.jpeg' }


  ];
}
