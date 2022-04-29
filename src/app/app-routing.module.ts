import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { UserFormComponent } from './MainPosts/user-form/user-form.component';


const routes: Routes = [
  {path:"events/:id", component : EventDetailsComponent},
  {path:"events",component: AllEventsComponent},
  {path:"form",component:UserFormComponent},
  {path:"**",redirectTo:"",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
