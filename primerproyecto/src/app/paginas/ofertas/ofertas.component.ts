import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Producto } from '../../modelos/producto.model';
@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
Productos: Producto [] = [

  {
    id: 1,
    nombre: 'traje sonic',
    descripcion: 'traje de cuerpo completo de sonic',
    precio: 159.99,
    imagen:  'trajesonic.jpg',   
    disponibilidad: true
  },
  {
    id: 2,
    nombre: 'gorro sonic',
    descripcion: 'es un gorro de la cabeza de sonic',
    precio: 39.99,
    imagen:  'gorrosonic.jpg',   
    disponibilidad: true
  },
  {
    id: 3,
    nombre: 'mochila among us',
    descripcion: 'mochila del juego among us',
    precio: 99.99,
    imagen:  'mochilasus.jpg',   
    disponibilidad: true
  },
  {
    id: 4,
    nombre: 'gorro de raichu',
    descripcion: 'gorro de cabeza de raichu',
    precio: 19.99,
    imagen:  'gorroraichhu.jpg',   
    disponibilidad: true
  },
  {
    id: 5,
    nombre: 'gorro gengar',
    descripcion: 'gorra de invierno de gengar',
    precio: 9.99,
    imagen:  'gorrogengar.jpg',   
    disponibilidad: true
  },
  {
    id: 6,
    nombre: 'cabeza de batman',
    descripcion: 'disfraz de batman de la cabeza',
    precio: 199.99,
    imagen:  'cabezabatman.jpg',   
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

