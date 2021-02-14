import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Position } from '../model/position';
import { LocationService } from '../services/location.service';
import { UserService } from '../services/user.service';
import { ApiConstants } from '../util/ApiConstants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  createMapForm: FormGroup;
  joinMapForm: FormGroup;
  user = {
    userName: '',
    roomId: ''
  };
  viewForm = {
    create: false,
    join: false
  }

  constructor(
    private router: Router,
    private locationService: LocationService,
    private userService: UserService,
    private fb: FormBuilder
  ) { 
    this.createMapForm = this.fb.group({
      createUserName: [''],
    });
    this.joinMapForm = this.fb.group({
      joinUserName: [''],
      roomId: ['']
    });
  }

  ngOnInit(): void {
  }

  createMap() {
    const user = {
      userData: {
        userName: this.createMapForm.value.createUserName,
        roomId: ''
      }
    }
    this.userService.addUserToRoom(ApiConstants.ADD_USER_TO_ROOM, user).subscribe((res:any) => {
      console.log(res);
    });
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

  toggleForm(val: string) {
    switch(val) {
      case "create":
        this.viewForm.create = !this.viewForm.create;
        break;
      case "join":
        this.viewForm.join = !this.viewForm.join;
    }
  }
}
