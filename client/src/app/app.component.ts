import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import * as binance from 'node-binance-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private _httpService: HttpService){

  }

  opciones = { 
    'apikey' : 'p7oze8VPMZhvfielHpY0jq3mtGat3uPDDPVRfnieatdZnkFrLRAugfHgmghJFsfa', 
    'apisecret' : 'IjFYnTE0xu7gpPQ1iVOrlMk4UaEPQQpPepmDgNwVW5pJjCx9jNTVuuoYQqLkolfb', 
    'stream' : false, 
    'verbose' : false, 
    'cleartext' : false 
  };

  ngOnInit(){
    binance.prices((error, ticker) => {
      console.log("prices()", ticker);

    });
  }


}
