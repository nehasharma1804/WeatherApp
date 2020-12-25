import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country-service.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any;
  

  
    constructor(
      private countriesList: CountryService,
    ) {
  }

  ngOnInit(): void {
    this.countriesList.getCountries().subscribe(
     (country)=>{
        this.countries=country
      }
    )
   
    }
}
