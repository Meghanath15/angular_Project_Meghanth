import { Component, OnInit } from '@angular/core';
import { Form, FormControl,Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EventtService } from '../event.service';
import { EventServiceService } from 'src/app/EventService/event-service.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  
  eventService: EventServiceService;

  // count:number=0;
  // id:number;

  users:Array<any>=[];

  ngOnInit() : void{}

  constructor(){
    this.eventService=new EventServiceService();
    

    this.userForm=new FormGroup({
      name:new FormControl('', Validators.pattern('[a-zA-Z ]*')),
      age : new FormControl("",[Validators.required, Validators.max(40)]),
      bio:new FormControl('', Validators.pattern('[a-zA-Z0-9 ]*')),
      gender: new FormControl(""),
      
    })

    console.log(this.userForm);
    
     //this.userForm.get("age").valueChanges.subscribe(value=>{
    //   console.log(value);
    //   console.log(this.name);
    // })
    // this.age.valueChanges.subscribe(value=>{
    //   console.log(this.age.errors);
    // })

  }

  handleSubmit(event:MouseEvent){
  if( this.userForm.invalid){
      console.log("Invalid name value");
      return;
      }
    }


}
