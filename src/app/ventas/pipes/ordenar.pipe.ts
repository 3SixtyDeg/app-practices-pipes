import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(productos: Producto[], ordernarPor: string = ''): Producto[] {
    
    switch(ordernarPor) { 
      case 'name': { 
        productos = productos.sort((a, b) => 
          (a.name > b.name) ? 1 : -1);
         break; 
      } 
      case 'category': { 
        productos = productos.sort((a, b) => 
          (a.category > b.category) ? 1 : -1);
         break; 
      } 
      case 'quantity': { 
        productos = productos.sort((a, b) => 
          (a.quantity > b.quantity) ? 1 : -1);
        break; 
     } 
      default: { 
         break; 
      } 
   } 

    return productos;
  }

}
