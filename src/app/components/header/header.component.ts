import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  time: string = '';
  hour: number = 0;
  minutes: number = 0;
  dayOfWeek: string = '';
  formattedDate: string = '';

  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.updateTime();

    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.updateTime();
        this.cdr.detectChanges();
      }, 20000);
    });

    this.getDayOfWeek();
    this.getFormattedDate();
  }

  updateTime(): void {
    this.hour = new Date().getHours();
    this.minutes = new Date().getMinutes();
    // this.time = `${this.hour}:${this.minutes < 10 ? '0' : ''}${this.minutes}`;
    this.time = `${this.hour}:${String(this.minutes).padStart(2, '0')}`;
  }

  getDayOfWeek(): void {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
    };
    this.dayOfWeek = new Date().toLocaleDateString('pt-BR', options);
  }

  getFormattedDate(): void {
    const optionsDate: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      // year: 'numeric',
    };
    this.formattedDate = new Date().toLocaleDateString('pt-BR', optionsDate);
  }
}
