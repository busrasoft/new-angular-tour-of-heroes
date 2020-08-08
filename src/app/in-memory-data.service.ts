import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Beyza' },
      { id: 12, name: 'Zahit' },
      { id: 13, name: 'Ömer' },
      { id: 14, name: 'Muhittin' },
      { id: 15, name: 'Emine' },
      { id: 16, name: 'Ejder' },
      { id: 17, name: 'Zahit' },
      { id: 18, name: 'Mahmut' },
      { id: 19, name: 'Faruk' },
      { id: 20, name: 'Emine2' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
