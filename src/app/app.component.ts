import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartCount: number;

  constructor() {
    this.cartCount = 0;
  }
  onAddToCart(cartCount: number) {
    console.log(cartCount);
    this.cartCount = cartCount;
  }
}
