import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  fontWeight: string = 'bold';

  fontSize: string = 'xx-large';

  // products: [ { name: string }] = [ { name: 'Apple'}];
  products: {image: string, name: string}[] = [];

  @Output() addItem : EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.products.push({ image: "assets/apple.jpg", name: 'Apple'});
    this.products.push({ image: "assets/strawberry.jpg", name: 'Strawberry'});
    this.products.push({ image: "assets/pineapple.jpg", name: 'Pineapple'});
    this.products.push({ image: "assets/banana.jpg", name: 'Banana'});
  }

  productSelected(name: string) {
    this.addItem.emit(name);
  }

  testButton() {
    console.log('testing button');
  }
}
