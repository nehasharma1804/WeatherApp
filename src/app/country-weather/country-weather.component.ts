import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country-service.service';

@Component({
  selector: 'app-country-weather',
  templateUrl: './country-weather.component.html',
  styleUrls: ['./country-weather.component.css']
})
export class CountryWeatherComponent implements OnInit {
  sub: any;
  
  countryId: string | undefined;
  countryCapital: string | undefined;
  countryData1:any
  temperature: any;
  humidity: any;
  windDetails: any;
  coordinate: any;

  constructor(
    private countryData: CountryService,
    private route: ActivatedRoute,
    private router: Router) {}
   

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
this.countryId=params.countryId,
this.countryCapital=params.countryCapital
      this.countryData.getWeatherData(this.countryId,this.countryCapital).subscribe(data=>{
this.countryData1=data
this.temperature=this.countryData1.main.temp
this.humidity=this.countryData1.main.humidity
this.windDetails=this.countryData1.wind
this.coordinate=this.countryData1.coord
      })

      })
      
   
  }
  }
  


