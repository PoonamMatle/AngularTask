import { Component } from '@angular/core';

@Component({
  selector: 'app-tka',
  templateUrl: './tka.component.html',
  styleUrls: ['./tka.component.css']
})
export class TKAComponent {

  TkaCourses=[

    {
      courseId:1,
      courseName:'Java Developer',
      courseFee:35000
    },
    {
      courseId:2,
      courseName:'Python Developer',
      courseFee:25000
    },
    {
      courseId:3,
      courseName:'Web Developer',
      courseFee:35000
    },
    {
      courseId:4,
      courseName:'MERN Stack',
      courseFee:35000
    },

  ]
}
