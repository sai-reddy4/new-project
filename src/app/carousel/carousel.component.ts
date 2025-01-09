import { Component } from '@angular/core';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carousel: any;

  constructor( private _carouselService:CarouselService){

    _carouselService.getcarousel().subscribe(
      (data:any)=>{
        this.carousel=data;
        console.log(data);
      }
    )
  }

}
