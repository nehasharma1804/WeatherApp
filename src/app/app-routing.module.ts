import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryWeatherComponent } from './country-weather/country-weather.component';

const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'country-weather', component: CountryWeatherComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
