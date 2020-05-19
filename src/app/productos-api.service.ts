import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductosAPIService { 
  

  constructor( public http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get("http://demo6292426.mockable.io/products")
  };
}


