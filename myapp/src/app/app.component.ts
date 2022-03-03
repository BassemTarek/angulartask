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

Products:any;


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
