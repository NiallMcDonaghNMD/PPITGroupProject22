import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-staff-register',
  templateUrl: './staff-register.component.html',
  styleUrls: ['./staff-register.component.css']
})
export class staffRegisterComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  registerUser(registerForm: NgForm) {
    if (registerForm.invalid) {
      return;
    }

    const { username, password } = registerForm.value;

    this.apiService.register(username, password).subscribe(res => {

      registerForm.reset();
    });

  }
}