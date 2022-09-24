import { Injectable } from '@angular/core';
import { WeatherLocation } from '../interfaces/location';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, ReplaySubject, concatWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // TODO: allow adding cities to list
  // TODO: add HTTP error handling
  locations$!: Observable<WeatherLocation[]>;
  locationUrl: string = 'http://localhost:5500';
  weatherData = new ReplaySubject<any>(1);
  temperatureType = '\u2109';

  constructor(private http: HttpClient) {
    this.locations$ = this.http
      .get<WeatherLocation[]>(this.locationUrl + '/locations')
      .pipe(shareReplay(1));
  }

  getWeatherData(location: WeatherLocation): void {
    this.http
      .get<any>(
        `https://api.weather.gov/gridpoints/${location.forecastOffice}/${location.latitude},${location.longitude}/forecast`
      )
      .subscribe((x) => this.weatherData.next(x));
  }
}
