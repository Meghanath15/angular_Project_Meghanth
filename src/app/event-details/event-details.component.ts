import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllEvents } from '../type/allEvents.type';
import { EventServiceService } from '../EventService/event-service.service';
import { EventtService } from '../MainPosts/event.service';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public event: AllEvents;

  @Input() public index:number;

  constructor(
    private route: ActivatedRoute,
    private eventtService: EventtService,
    private eventService: EventServiceService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      const eventId=params.id;
      this.event=this.eventtService.getEventDetailById(+eventId);
    });
  }

  handleEventAdd(event:AllEvents){
    this.eventService.addItem(event);
  }

}
