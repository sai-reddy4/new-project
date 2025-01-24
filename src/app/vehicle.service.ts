import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  

  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  constructor(private _httpClint:HttpClient) { }

  getVehicles():Observable<any>{
    return this._httpClint.get(this.baseUrl);
  }

  getFilteredVehicles(term:string):Observable<any>{
    return this._httpClint.get(this.baseUrl+"?filter="+term)
  }

  getSortedVehicles(column:string,order:string):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }

  getpeginationVehicles(limit:number,page:number):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page="+page);

  }

  deleteVehicle(id:number):Observable<any>{
    return this._httpClint.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  createVehicle(data:any){
    return this._httpClint.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }
  // getting Specific data in http methods

  getVehicle(id: any):Observable<any>{
    return this._httpClint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }

  updatevehicle(id:number,data:any){
    return this._httpClint.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,data)
  }
}
