import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  course=[
        {
          cId:101,
          cName:"FullStack Developer",
          duration:"6 Month",
          fee:30000
        },
        {
          cId:102,
          cName:"Python Developer",
          duration:"4 Month",
          fee:25000
        },
        {
          cId:103,
          cName:"AWS",
          duration:" 5 Month",
          fee:20000
        },
        {
          cId:104,
          cName:"Web Developer",
          duration:"8 Month",
          fee:35000
        }

  ]

}
