//import { Component } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';


flag:boolean=false;

Products:any=[
  {
    Id:1,
    Name:"Samsung Galaxy M12",
    Quantity:1,
    Price:4000,
    Img:""
  },
  {
   Id:10,
   Name:"Levonp Legion 5",
   Quantity:2 ,
   Price:25000,
   Img:""
 },
 {
   Id:20,
   Name:"Tommy Hilfger",
   Quantity:3,
   Price:1500,
   Img:""
 },
]


constructor(){}
@ViewChild(ProductsComponent) ViewProductList!:ProductsComponent;

ngAfterViewInit(): void {
  this.Products=this.ViewProductList.renderValues();
  
}

DisplayProducts()
{

  if(this.flag==false){
    this.flag=true;
  }
}

}
