import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css'],
})
export class HourlyComponent implements OnInit {
  weatherData!: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.weatherData.subscribe((w) => {
      this.weatherData = w;
    });
  }
}
