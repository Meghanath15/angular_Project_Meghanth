import { Component, OnInit, Output } from '@angular/core';
import { EventServiceService } from '../EventService/event-service.service';
import { AllEvents } from '../type/allEvents.type';
import { EventtService } from '../MainPosts/event.service';
@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  events: AllEvents[];

  constructor(private eventService:EventServiceService, private eventtService:EventtService) {}
  
  ngOnInit(): void {
    this.events=this.eventtService.getEvents();
  }

}
