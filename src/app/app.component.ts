import { Form, FormControl , Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Output} from '@angular/core';
import { EventServiceService } from './EventService/event-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent implements OnInit{
  userForm: FormGroup;
  searchName:string;
  eventService: EventServiceService;
  users:Array<any>=[];

  ngOnInit() : void{}

  constructor(){
  
    this.eventService=new EventServiceService();
    

    this.userForm=new FormGroup({
      name:new FormControl('', Validators.pattern('[a-zA-Z ]*')),
      price : new FormControl("",[Validators.required]),
      date:new FormControl('', Validators.pattern('[0-9/- ]*')),
      time: new FormControl(""),
    })
  }

  handleSubmit(event:MouseEvent){
  if(this.userForm.invalid){
      console.log("Invalid name value");
      return;
  }
  }
  handleSearch(event:MouseEvent){
    console.log(this.searchName)

  }

  
}
