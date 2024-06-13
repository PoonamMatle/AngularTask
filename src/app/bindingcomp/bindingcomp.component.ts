import { Component } from '@angular/core';

@Component({
  selector: 'app-bindingcomp',
  templateUrl: './bindingcomp.component.html',
  styleUrls: ['./bindingcomp.component.css']
})
export class BindingcompComponent {
imgJava="assets/images/java.jpg";
imgAndroid="assets/images/Android.jpg";
imgpython="assets/images/python.jpg";
day='monday';
  Book=[

    {
      bookId:101,
      bookName:'Java Programming',
      author:'xyz',
      price:250,
      qty:50
    },
    {
      bookId:102,
      bookName:'c Programming',
      author:'abc',
      price:500,
      qty:80
    },
    {
      bookId:103,
      bookName:'python Programming',
      author:'harry',
      price:400,
      qty:100
    },
    {
      bookId:104,
      bookName:'php Programming',
      author:'jhon',
      price:800,
      qty:120
    },
    {
      bookId:105,
      bookName:'Android Programming',
      author:'nancy',
      price:350,
      qty:150
    },

  ]
}
