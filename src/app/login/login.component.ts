import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from '../model/position';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';

  constructor(
    private router: Router,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
  }

  createMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos: Position = new Position();
          pos.latitude = position.coords.latitude;
          pos.longitude = position.coords.longitude;
          this.locationService.position = pos;
          this.router.navigate(['map']);
        },
        () => {
          alert("Error: The Geolocation service failed.");
        }
      );
    } else {
      // Browser doesn't support Geolocation
     alert("Error: Your browser doesn't support geolocation.");
    }
  }

  joinMap() {
    this.router.navigate(['map']);
  }

}
