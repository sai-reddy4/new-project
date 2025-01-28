import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  id:number=0;

  constructor(private _activatedRoute:ActivatedRoute,private _vehicleService:VehicleService,private _router:Router) {

    //  capturing id with activated route and adding activted route above

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        this.id=data.id;

        // integrating the api

        _vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            // display the data in form

            this.vehicleForm.patchValue(data);
          }
        )
      }
    )

  }

  

  public vehicleForm:FormGroup= new FormGroup(
    {Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    cost:new FormControl()

    }
  )

  // update 
  submit(){

  if(this.id){
    this._vehicleService.updatevehicle(this.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data.id);
        // this.id=data.id;
        alert('Vehicle update successfully');
        this._router.navigateByUrl('/mywebsite/vehicle');

        
      },(err:any)=>{
        alert('internal server error')
      }
    )
  }
// create
else{
    
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("created");
      // this._router.navigate(["/vehicle"]); other method to redirect
      this._router.navigateByUrl("/mywebsite/vehicle");
    },(err:any)=>{
      alert("internal server error")
    }
  )
  }

}

}
