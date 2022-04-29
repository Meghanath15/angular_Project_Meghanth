import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AllEvents } from '../type/allEvents.type';
import {Router } from '@angular/router';

@Component({
  selector: 'app-each-event',
  templateUrl: './each-event.component.html',
  styleUrls: ['./each-event.component.css']
})
export class EachEventComponent implements OnInit {
  @Input() public event: AllEvents;
  @Output() public eventLikeButton: EventEmitter<AllEvents> = new EventEmitter();


  constructor(private router:Router) {}

  ngOnInit(): void {}


  handleShowDetails() {
    this.router.navigateByUrl(`/events/${this.event.id}`, {})
  }

}
