import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user_info=[
    {
      uid:121,
      uname:"poonam",
      email:"poonammatle@gmail.com",
      password:123
    },
    {
      uid:111,
      uname:"makarand",
      email:"makarande@gmail.com",
      password:1234
    },
    {
      uid:201,
      uname:"xyz",
      email:"xyz@gmail.com",
      password:111
    },
    {
      uid:121,
      uname:"neha",
      email:"neha@gmail.com",
      password:112
    },
    {
      uid:211,
      uname:"sanika",
      email:"sanika@gmail.com",
      password:100
    },





  ]

}
