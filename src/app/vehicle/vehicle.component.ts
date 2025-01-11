import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles:any=[];
  constructor(private _vehicleService:VehicleService){
    this.pageload();

  }

  pageload(){
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      }
    )


  }
  
  term:string="";

  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{
        alert("Internal server error")
      }
    )
  }

    column:string="";
    order:string="";

    sort(){
      this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
        (data:any)=>{
          this.vehicles=data;
          console.log(this.vehicles);
        },(err:any)=>{
          alert("Internal server error")
        }
      )
    }
  
    limit:number=0;
    page:number=0;

    pagination(){
      this._vehicleService.getpeginationVehicles(this.limit,this.page).subscribe(
        (data:any)=>{
          this.vehicles=data;
          console.log(this.vehicles);
        },(err:any)=>{
          alert("error")
        }
      )
    }

    delete(id:number){
      if(confirm("Are you sure")==true){
        this._vehicleService.deleteVehicle(id).subscribe(
          (data:any)=>{
            alert("Record Deleted");
            this.pageload()
            // location.reload();
          },(err:any)=>{
            alert("Error")
          }
        )
      } else{
        alert("You have cancelled")
      }
    }

}
