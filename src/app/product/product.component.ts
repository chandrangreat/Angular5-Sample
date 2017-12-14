import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() addToCartEvent = new EventEmitter<number>();

  public addToCartCount: number;

  constructor() {
    this.addToCartCount = 0;
   }

  ngOnInit() {
  }

  public addToCart() {
    ++this.addToCartCount;
    this.addToCartEvent.emit(this.addToCartCount);
  }

}
