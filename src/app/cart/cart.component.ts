import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() products: any[] = [];

  deleteItem(name: string) {
    console.log('deleteItem: ' + name);

    let objFound = this.products.find(o => o.name === name);

    let foundIndex = this.products.indexOf(objFound, 0);

    this.products.splice(foundIndex, 1);
    
  }
}
