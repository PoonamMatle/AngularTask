import { Component } from '@angular/core';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {

  ProductItems=[
    {
      productId:101,
      productName:'Books',
      productPrice:50,
      productQty:18

    },
    {
      productId:102,
      productName:'Pens',
      productPrice:20,
      productQty:100
    },
    {
      productId:103,
      productName:'Pencile',
      productPrice:25,
      productQty:80
    },
    {
      productId:104,
      productName:'Laptops',
      productPrice:200,
      productQty:45000
    }

  ]
}
