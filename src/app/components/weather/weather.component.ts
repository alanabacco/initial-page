import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';
import { Weather } from '../../types';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  weather: Weather[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((res) => {
      this.weather = res.clima;
    });
  }

  formatDate(date: string): string {
    return date.split('-').reverse().join('/');
  }
}
