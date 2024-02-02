import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from '../../components/notes/notes.component';
import { HeaderComponent } from '../../components/header/header.component';
import { WeatherComponent } from '../../components/weather/weather.component';
import { LofiComponent } from '../../components/lofi/lofi.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    NotesComponent,
    HeaderComponent,
    WeatherComponent,
    LofiComponent,
  ],
})
export class HomeComponent {}
