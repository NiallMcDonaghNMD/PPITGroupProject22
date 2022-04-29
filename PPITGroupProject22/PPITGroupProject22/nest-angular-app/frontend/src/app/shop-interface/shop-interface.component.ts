import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import * as $ from 'jquery';

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

  getShops()
  {
    const staticUrl = 'http://localhost:3000/shop';
    $.getJSON(staticUrl, function(data){
      //console.log(data);
      for (let i = 0; i < data.length; i = i +1)
      {
        console.log(data[i]);
        document.write(JSON.stringify(data[i]));
      }
      
    })
    //this.apiService.getShops();
  }


 
}//end ShopInterfaceComponent


