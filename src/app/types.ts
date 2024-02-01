export interface WeatherData {
  cidade: string;
  estado: string;
  atualizado_em: string;
  clima: Weather[];
}

export interface Weather {
  data: string;
  condicao: string;
  condicao_desc: string;
  min: number;
  max: number;
  indice_uv: number;
}

export interface City {
  nome: string;
  id: number;
  estado: string;
}
