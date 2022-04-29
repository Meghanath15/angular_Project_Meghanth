import { Injectable } from '@angular/core';
import { AllEvents } from "../type/allEvents.type";

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private items: AllEvents[]=[];

  constructor() { }

  getItems():AllEvents[]{
    return [...this.items];
  }
  addItem(item:AllEvents){
    this.items.push(item);
  }

  removeItem(item:AllEvents){
    console.log(this.items)
  }
}
