import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { CourseComponent } from './course/course.component';
import { DirectiveCompComponent } from './directive-comp/directive-comp.component';
import { BindingcompComponent } from './bindingcomp/bindingcomp.component';
import { BookContainerComponent } from './book-container/book-container.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FoodIteamComponent } from './food-iteam/food-iteam.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { TKAComponent } from './tka/tka.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    CourseComponent,
    DirectiveCompComponent,
    BindingcompComponent,
    BookContainerComponent,
    EventBindingComponent,
    FoodIteamComponent,
    ProductItemsComponent,
    TKAComponent,
    PageNotFoundComponent,
    StudentComponent,
    StudentDetailsComponent,
    StudentRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
