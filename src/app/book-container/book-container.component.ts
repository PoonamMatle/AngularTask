import { Component } from '@angular/core';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent {

  Book_info=[

    {
      bookId:101,
      bookName:'Java Programming',
      bookAuthor:'James',
      price:450,
      bookImg:"assets/images/java.jpg"
    },
    {
      bookId:102,
      bookName:'Python Programming',
      bookAuthor:'Gudio',
      price:650,
      bookImg:"assets/images/python.jpg"
    },
    {
    bookId:103,
    bookName:'Android',
    bookAuthor:'Harry',
    price:350,
    bookImg:"assets/images/Android.jpg"
    },
    {
      bookId:104,
      bookName:'Php Programming',
      bookAuthor:'Jhon',
      price:450,
      bookImg:"assets/images/php.jpg"
    }
  ]

}
