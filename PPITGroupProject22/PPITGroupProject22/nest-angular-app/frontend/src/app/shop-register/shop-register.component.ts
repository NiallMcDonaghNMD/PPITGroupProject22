import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-shop-register',
  templateUrl: './shop-register.component.html',
  styleUrls: ['./shop-register.component.css']
})

export class shopRegisterComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    //delete this
    console.log("testing shop register");
  }

  registerShop(registerForm: NgForm) {
    if (registerForm.invalid) {
      
      return;
    }

    const { shopName, itemList } = registerForm.value;

    this.apiService.register(shopName, itemList).subscribe(res => {

      registerForm.reset();
    });

  }
}
