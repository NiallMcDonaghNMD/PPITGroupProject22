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
    
  }

  registerShop(regForm: NgForm) {
    if (regForm.invalid) {
      
      return;
    }

    const { shopName, itemList } = regForm.value;

    this.apiService.registerShop(shopName, itemList).subscribe(res => {

      regForm.reset();
    });

  }
}
