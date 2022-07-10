import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crytos } from '../interfaces/crytos.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrytosService {
  private url: string = 'https://api.binance.com/api/v3';
  private url2:string = "http://localhost:80/archivosphp/";

  constructor(private http: HttpClient) { }

  getAllCrytos(): Observable<Crytos[]> {
    return this.http.get<Crytos[]>(`${this.url}/ticker/24hr`)

  }
 
  recogercoins() {
    return this.http.get(`${this.url2}consultacoin2.php`);
  }
  votar(articulo:any) {
    return this.http.post(`${this.url2}votarcoin.php`, JSON.stringify(articulo));
  }
 
}
