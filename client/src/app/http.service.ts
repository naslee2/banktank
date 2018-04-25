import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {
  result: any;

  constructor(private _http: HttpClient) { 
    this.getBinancePrices();
  }

  getBinancePrices(){
    return this._http.get('')
  }
}