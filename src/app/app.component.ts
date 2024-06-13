import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPracticle';
  num:number=1234;
  str:String="Hello";
  val:boolean=true;
  msg="welcome";
  txt:any=123.11;

  constructor(private route:Router){}
  load(){

    this.route.navigate(['/tka'])
  }
}
