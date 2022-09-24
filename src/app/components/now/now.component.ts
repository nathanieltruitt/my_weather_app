import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherLocation } from 'src/app/interfaces/location';
import { WeatherService } from 'src/app/services/weather.service';
import { faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css'],
})
export class NowComponent implements OnInit {
  weatherData!: any;
  faWind = faWind;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.weatherData.subscribe((w) => {
      this.weatherData = w;
      console.log(this.weatherData);
    });
  }

  getTempType() {
    return this.weatherService.temperatureType;
  }

  ngOnDestroy() {
    this.weatherService.weatherData.unsubscribe();
  }
}
