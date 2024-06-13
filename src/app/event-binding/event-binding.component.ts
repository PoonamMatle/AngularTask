import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  result:any;
  resultsub:any;
  resultmul:any;
  resultdiv:any;
  add(a:any,b:any){

    this.result=parseInt(a)+parseInt(b);

  }
  sub(x:any,z:any){

    this.resultsub=parseInt(x)-parseInt(z);

  }
  mul(p:any,q:any){

    this.resultmul=parseInt(p)*parseInt(q);

  }
  div(m:any,n:any){

    this.resultdiv=parseInt(m)/parseInt(n);

  }
}
