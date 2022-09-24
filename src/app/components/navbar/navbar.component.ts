import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherLocation } from 'src/app/interfaces/location';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  locations!: WeatherLocation[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.locations$.subscribe((x) => {
      this.locations = x;
    });
  }

  onSelect(value: string): void {
    for (let location of this.locations) {
      if (location.name === value.toLowerCase()) {
        this.weatherService.getWeatherData(location);
      }
    }
  }
}
