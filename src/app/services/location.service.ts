import { Injectable } from '@angular/core';
import { Position } from '../model/position';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  position: Position = new Position();

  constructor() { }
}
