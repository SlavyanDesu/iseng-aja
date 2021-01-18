import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  provideIn: 'root'
})

export class TransportationService {
  bmw: Car = { make: 'BMW', model: 'X3', miles: 5000 };
  chevrolet: Car = { make: 'Chevrolet', model: 'Captiva', miles: 3500 };
  honda: Car = { make: 'Honda', model: 'City', miles: 10000 };
  
  cars: Car[] = [ this.bmw, this.chevrolet, this.honda ];
  
  constructor() {}
  
  getCars() {
    return this.cars();
  }
}