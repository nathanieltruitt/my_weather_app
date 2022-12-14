import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css'],
})
export class NowComponent implements OnInit {
  weatherData!: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.weatherData.subscribe((w) => {
      this.weatherData = w;
    });
  }

  getTempType() {
    return this.weatherService.temperatureType;
  }

  ngOnDestroy() {
    this.weatherService.weatherData.unsubscribe();
  }
}
