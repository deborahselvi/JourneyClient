import { Component, OnInit } from '@angular/core';
import { Position } from '../model/position';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    
  position: Position = new Position();

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.position = this.locationService.position;
  }

}
