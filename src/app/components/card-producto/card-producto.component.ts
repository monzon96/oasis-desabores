import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {
  @Input() nombre!: string;
  @Input() precio!: number;
  @Input() imagen!: string;

  irAWhatsapp(): void {
    const mensaje = `Hola, estoy interesado en ordenar *${this.nombre}* `;
    const telefono = '50250827033';
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
