import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FoodIteamComponent } from './food-iteam/food-iteam.component';
// import { ProductItemsComponent } from './product-items/product-items.component';
// import { TKAComponent } from './tka/tka.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { StudentComponent } from './student/student.component';
// import { StudentDetailsComponent } from './student-details/student-details.component';
// import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {
    path:'product',component:ProductComponent
  }
  // {
  //   path:'student',children:[

  //     {
  //       path:'',component:StudentComponent
  //     },
  //     {
  //       path:'stud',component:StudentDetailsComponent
  //     },
  //     {
  //       path:'studr',component:StudentRegistrationComponent
  //     },
  //   ]
  // },
  
  // // {
  // //   path:'',redirectTo:'fooditeam',pathMatch:'full'
  // // },

  // {
  //   path:'fooditeam',component:FoodIteamComponent
  // },
  // {
  //   path:'productitem',component:ProductItemsComponent
  // },
  // {
  //   path:'tka',component:TKAComponent
  // },
  // {
  //   path:'**',component:PageNotFoundComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
