import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CountryService {
  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
  getWeatherData (params1: any,params2:any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
   // let options = new RequestOptions({ headers: headers });
    let param1 = JSON.stringify(params2,params1);
   console.log(param1)
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+params2+','+params1+'&'+'APPID'+'='+'794ee95e63c5a32aaf88cd813fa2e425');
  }
  constructor(
    private http: HttpClient
  ) { 
  
  }
}

