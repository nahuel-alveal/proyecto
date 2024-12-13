import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Camisa cosmic kid',
      descripcion: 'Camisa de algodón comoda paa la preescucha.',
      precio: 29.99,
      imagen:  'cosmic1.jpg' ,   
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'chaqueta de spiderman',
      descripcion: 'chaqueta con diseño de spiderman, comoda y calentita',
      precio: 49.99,
      imagen: 'spider1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'campera puffer',
      descripcion: 'campera puffer.',
      precio: 199.99,
      imagen: 'kudarose1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'pulover',
      descripcion: 'pulover',
      precio: 59.99,
      imagen: 'robloxremera.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
     {
      id: 5,
      nombre: 'traje gaturro',
      descripcion: 'es un traje de cuerpo completo de gaturro',
      precio: 399.99,
      imagen: 'trajegaturro.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'traje lanzaguisantes',
      descripcion: 'es un traje de cuerpo completo de un lanzaguisantes.',
      precio: 89.99,
      imagen: 'trajelanzaguisantes.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'crosvaqueras',
      descripcion: 'son crocs vaqueras',
      precio: 69.99,
      imagen: 'crosvaqueras.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'crocs astroboy',
      descripcion: 'son crocs de astroboy',
      precio: 99.99,
      imagen: 'crocsastroboy.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
     {
      id: 9,
      nombre: 'traje homero',
      descripcion: 'es un traje cuerpo completo de homero',
      precio: 599.99,
      imagen: 'trajehomero.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
