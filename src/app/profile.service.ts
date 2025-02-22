import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _httpClint:HttpClient) { }

  getprofile():Observable<any>{
    return this._httpClint.get("https://dummyapi.online/api/social-profiles");
  }
}
