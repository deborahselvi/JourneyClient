import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    
  lat = 13;
  long = 80;
  
  constructor() { }

  ngOnInit(): void {

  }

}
