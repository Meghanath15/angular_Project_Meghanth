import { Injectable } from '@angular/core';
import { AllEvents } from '../type/allEvents.type';
@Injectable({
  providedIn: 'root',
})
export class EventtService {
  private events: AllEvents[] = [
    {
      id: 1,
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      }
    },
      {
      id: 2,
      name: 'ng-nl',
      date: '4/15/2037',
      time: '9:00 am',
      price: 950.00,
      imageUrl: '/assets/images/ng-nl.png',
      // onlineUrl: 'http://ng-nl.org/',
      location:{
        
      }

    },
    {
      id: 3,
      name: 'ng-conf 2037',
      date: '5/4/2037',
      time: '9:00 am',
      price: 759.00,
      imageUrl: '/assets/images/ng-conf.png',
      location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA'
      }
    },
    
    {
      id: 4,
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8:00 am',
      price: 800.00,
      imageUrl: '/assets/images/basic-shield.png',
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      }
    },
    {
      id: 5,
      name: 'ng-vegas',
      date: '2/10/2037',
      time: '9:00 am',
      price: 400.00,
      imageUrl: '/assets/images/ng-vegas.png',
      location: {
        address: 'The Excalibur',
        city: 'Las Vegas',
        country: 'USA'
      },
    }
  ];

  constructor() {}

  public getEvents(): AllEvents[] {
    return [...this.events];
  }

  public addEvents(product: AllEvents): void {
    this.events.push(product);
  }
  
  public removeEvent(id: number): void {
    this.events = this.events.filter((event) => event.id !== id);
  }

  public getEventDetailById(id: number): AllEvents {
    const event = this.events.filter((event) => event.id === id);
    return event.length && event[0]
  }
}