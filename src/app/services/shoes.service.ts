import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Shoes } from "../interfaces/shoes";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  BASE_URL: string= 'http://localhost:3000';

  constructor(private http:HttpClient) { }
  getShoes(): Observable<Shoes[]>{
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/todos`).pipe(
      map((response: any)=>{
        return response.data;
      })
    );
  }
  getShoesforbrand(brand: string):Observable<Shoes[]>{
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/brand?brand=${brand}`)
  }
  getShoesformodel(model: string):Observable<Shoes[]>{
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/model?model=${model}`)
  }
  getShoesfordate(date: string):Observable<Shoes[]>{
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/date?name=${date}`)  
  }
  getShoesforname(name: string):Observable<Shoes[]>{
    return this.http.get<Shoes[]>(`${this.BASE_URL}/name?name=${name}`)  
  }
}
