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
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/brand?brand=${brand}`).pipe(
      map((response:any)=>{
        return response.data;
      })
    );
  }
  getShoesformodel(model: string):Observable<Shoes[]>{
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/model?model=${model}`).pipe(
      map((response:any)=>{
        return response.data;
      })
    );
  }
  getShoesfordate(date: string):Observable<Shoes[]>{
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/date?name=${date}`).pipe(
      map((response:any)=>{
        return response.data;
      })
    );  
  }
  getShoesforname(name: String):Observable<Shoes[]>{
    console.log(name);
    console.log((`${this.BASE_URL}/shoes/name?name=${name}`))
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/name?name=${name}`).pipe(
      map((response:any)=>{
        console.log(response);
        return response.data;
      })
    );
  }

  getShoesforstore(store: String):Observable<Shoes[]>{
    return this.http.get<Shoes[]>(`${this.BASE_URL}/shoes/store?store=${store}`).pipe(
      map((response:any)=>{
        console.log(response);
        return response.data;
      })
    );
  }
}
