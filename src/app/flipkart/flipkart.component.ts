import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  products: any = [
    { name: 'pen', price: 10, rating: 3, freedelivery: 'true' },
    { name: 'phone', price: 100, rating: 2, freedelivery: 'false' },
    { name: 'shirt', price: 400, rating: 4, freedelivery: 'true' },
    { name: 'cap', price: 200, rating: 5, freedelivery: 'false' },
    { name: 'mobile case', price: 300, rating: 2, freedelivery: 'true' },
    { name: 'remote', price: 400, rating: 2.5, freedelivery: 'false' }
  ];

  delete(i: number) {
    this.products.splice(i, 1);
  }

  text: string = "";

  search() {
    this.products = this.products.filter((product: any) => product.name.includes(this.text));
  }

  freedelivery() {
    this.products = this.products.filter((product: any) => product.freedelivery == 'true');
  }

  sort() {
    this.products.sort((a: any, b: any) => b.price - a.price);
  }

  sort1() {
    this.products.sort((a: any, b: any) => a.price - b.price);
  }

  sort2() {
    this.products.sort((a: any, b: any) => b.rating - a.rating);
  }

  sort3() {
    this.products.sort((a: any, b: any) => a.rating - b.rating);
  }

  discount() {
    this.products = this.products.map((product: any) => {
      product.price = product.price * 0.5;
      return product;
    });
  }

  charges() {
    this.products = this.products.map((product: any) => {
      if (product.freedelivery === 'false') {
        product.price = product.price + 30;
      }
      return product;
    });
  }

  total(){
    let cost=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(cost)
  }

  cart(){
    let file=this.products.length;
    alert(file)
  }

  name:string='';
  price:number=0;
  rating:number=0;
  Freedelivery:boolean=true;
  
  result(){
    let product={
    name:this.name,
    price:this.price,
    rating:this.rating,
    freedelivery:this.freedelivery

  };
  this.products.unshift(product)
}
}
