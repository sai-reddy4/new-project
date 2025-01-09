import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private _httpClint:HttpClient) { }

  getcarousel():Observable<any>{

    return this._httpClint.get("https://dummyapi.online/api/pokemon");
  }
}
