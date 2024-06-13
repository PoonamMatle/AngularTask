import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-comp',
  templateUrl: './directive-comp.component.html',
  styleUrls: ['./directive-comp.component.css']
})
export class DirectiveCompComponent {

  Student=[

   { 
    name:'poonam',
    roll_no:101,
    city:'pune',
    dept:'CSE'
  },
  { 
    name:'sanika',
    roll_no:102,
    city:'mumbai',
    dept:'IT'
  },
  { 
    name:'chaitali',
    roll_no:103,
    city:'delhi',
    dept:'BSC'
  },
  { 
    name:'soniya',
    roll_no:104,
    city:'mumbai',
    dept:'CSE'
  },

]

}
