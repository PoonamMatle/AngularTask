import { Component } from '@angular/core';

@Component({
  selector: 'app-food-iteam',
  templateUrl: './food-iteam.component.html',
  styleUrls: ['./food-iteam.component.css']
})
export class FoodIteamComponent {
FoodItems=[
  {
    foodId:101,
    foodName:'Maggi',
    img:"assets/images/maggi.jpg"
  },
  {
    foodId:102,
    foodName:'Pasta',
    img:"assets/images/pasta.jpg"
  },
  {
    foodId:103,
    foodName:'Noodles',
    img:"assets/images/noodles.jpg"

  },
  {
  foodId:104,
  foodName:'Pizza',
  img:"assets/images/pizza.jpg"
  }
]

}
