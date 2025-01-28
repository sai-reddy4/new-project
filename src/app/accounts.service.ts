import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
 
  constructor(private _httpClint:HttpClient) { }
    
  getAccounts():Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }
  getfilter(sai:string):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+sai);
  }

  getSortAccounts(column:number,order:number):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
  }

  getPeginationAccounts(limit:number,page:number):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page);
  }

  deleteAccounts(id:number):Observable<any>{
    return this._httpClint.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
  getviewaccount(id:number):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
  }
  updateaccount(id:number,data:any):Observable<any>{
    return this._httpClint.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id,data);
  }
  createaccount(data: any):Observable<any>{
     return this._httpClint.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
  }
}
