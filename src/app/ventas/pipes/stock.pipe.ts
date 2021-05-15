import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: number): string {
    let stock = '';

    if (value <= 0) {
      stock = 'OUTOFSTOCK';
    } else if (value > 0 && value < 20) {
      stock = 'LOWSTOCK';
    } else if (value >= 20) {
      stock = 'INSTOCK';
    }

    return stock;
  }

}
