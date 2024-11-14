import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { localProducts } from "../data/mock-product";
import { Iproduct } from "./iproduct";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/products';

  products:Iproduct[] = localProducts;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erro ao buscar produtos da API, usando produtos locais:', error);
        return of(this.products);
      })
    )
  }
}
