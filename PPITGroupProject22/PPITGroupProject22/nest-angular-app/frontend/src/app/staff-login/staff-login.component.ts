import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }


  ngOnInit(): void {
    this.apiService.jwtUserToken.subscribe(token => {
      // if (token) {                             //Webpage doesnt load with this enabled, look into implementing tokens successfully later - Frontend?
      //   this.router.navigateByUrl('/').then();
      // }
    });
  }

  
  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;

    }
    const { username, password } = loginForm.value;
    this.apiService.login(username, password);
    return loginForm.reset();
  }
}
