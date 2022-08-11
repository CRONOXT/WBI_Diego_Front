import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Shoes } from "../interfaces/shoes";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  BASE_URL: string = 'http://localhost:3000';
  //SE USA EL HTTPCLIENT PARA LOS REQUEST DE LA API
  constructor(private http: HttpClient) { }
  //FUNCION QUE RECIBE TODOS LOS ZAPATOS CON LA DIRECCION DE LA API
  getShoes(): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/todos`).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
  //FUNCION QUE RECIBE TODOS LOS ZAPATOS DE UNA MARCA ESTABLECIDA
  getShoesforbrand(brand: string): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/brand?brand=${brand}`).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
  //FUNCION QUE RECIBE TODOS LOS ZAPATOS DE UN MODELO ESTABLECIDO 
  getShoesformodel(model: string): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/model?model=${model}`).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
  //FUNCION QUE RECIBE TODOS LOS ZAPATOS QUE TENGAN UNA FECHA DE LANZAMIENTO ESTABLECIDA
  getShoesfordate(date: string): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/date?name=${date}`).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
  //FUNCION QUE RECIBE TODOS LOS ZAPATOS POR UN NOMBRE ESTABLECIDO 
  getShoesforname(name: String): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/name?name=${name}`).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
  //FUNCION QUE RECIBE TODOS LOS ZAPATOS PROVENIENTES DE UNA TIENDA ESTABLECIDA 
  getShoesforstore(store: String): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/store?store=${store}`).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
  //FUNCION QUE RECIBE TODOS LOS ZAPATOS Y LOS ORDENA POR FECHA DE LANZAMIENTO 
  getShoesforDateAsc(): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/date/asc`).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
}
