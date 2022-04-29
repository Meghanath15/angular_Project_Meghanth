import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { EachEventComponent } from './each-event/each-event.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { UserFormComponent } from './MainPosts/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EachEventComponent,
    AllEventsComponent,
    EventDetailsComponent,
    UserFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
