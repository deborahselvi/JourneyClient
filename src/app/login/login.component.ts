import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createMap() {
    this.router.navigate(['map']);
  }

  joinMap() {
    this.router.navigate(['map']);
  }

}
