import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MytraService {

  constructor(private _httpClint:HttpClient) { }

  getmytras():Observable<any>{
    return this._httpClint.get("https://fakestoreapi.com/products");

  }
}
