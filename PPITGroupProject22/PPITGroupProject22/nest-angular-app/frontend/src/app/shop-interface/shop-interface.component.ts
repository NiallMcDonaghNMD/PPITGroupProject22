import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-shop-interface',
  templateUrl: './shop-interface.component.html',
  styleUrls: ['./shop-interface.component.css']
})
export class ShopInterfaceComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    
  }//end on init

 
}//end ShopInterfaceComponent

