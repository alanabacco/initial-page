import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // private cityName = 'Borborema';
  // private uf = 'SP';
  private cityCode = '';
  private LocalStorageKey = 'cityCode';

  constructor(private httpClient: HttpClient) {
    this.loadCityCodeFromLocalStorage();
  }

  getWeatherData(): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(
      `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${this.cityCode}/5`
    );
  }

  // handleCityCode(): void {
  //   const results: any = this.httpClient.get(
  //     `https://brasilapi.com.br/api/cptec/v1/cidade/${this.cityName}`
  //   );

  //   if (results.city === 'NO_CITY_NOT_FOUND') {
  //     console.error('Cidade não encontrada');
  //   } else {
  //     const result = results.find((item: any) => item.estado === this.uf);
  //     if (result) {
  //       const cityCode = result.id;
  //       console.log('cityCode:', cityCode);
  //     } else {
  //       console.error('Não foi possível encontrar o código da cidade.');
  //     }
  //   }
  // }

  // getCities(): Observable<IbgeCity> {
  //   return this.httpClient.get<IbgeCity>(
  //     `https://brasilapi.com.br/api/ibge/municipios/v1/${this.uf}?providers=dados-abertos-br,gov,wikipedia`
  //   );
  // }

  private loadCityCodeFromLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      this.cityCode = JSON.parse(
        localStorage.getItem(this.LocalStorageKey) || '962'
      );
      console.log('cityCode:', this.cityCode);
    }
  }

  getCityCode(): string {
    return this.cityCode;
  }

  // colocar quando o usuario escolher uf e city e clicar em salvar
  // private createCityCode(): void {
  //   const cityCode: string = this.getCityCode();
  //   if (this.isLocalStorageAvailable()) {
  //     localStorage.setItem(this.LocalStorageKey, JSON.stringify(cityCode));
  //   } else {
  //     console.error(
  //       'Local storage is not available. Unable to update cityCode.'
  //     );
  //   }
  // }
  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'testLocalStorage';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}

// - pn: parcialmente nublado
// - c: chuva
// - pc: pancadas de chuva
// - ci: chuvas isoladas
