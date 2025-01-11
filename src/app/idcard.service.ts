import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdcardService {

  constructor (private _httpClint:HttpClient){}
  
  getidcard():Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }
  
  getFilterIdcard(sai: any):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+sai);

  }
  getSortIdcard(column:string, order:string):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);

  }
  getPaginationIdcard(limit:number,page:number):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);

  }
  getDeleteIdcard(id:number):Observable<any>{
    return this._httpClint.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }
  createIdcard(data:any):Observable<any>{
    return this._httpClint.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);


  }
}
