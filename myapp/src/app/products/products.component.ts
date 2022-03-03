import { ProductServiceService } from './../Services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { ICategory } from '../Shared Classes and types/ICatefory';
import { IProducts } from '../Shared Classes and types/IProduct';
import {DiscountOffers} from '../Shared Classes and types/Discountoffers.enum';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductServiceService)
   {
     this.Discount=DiscountOffers.D1,
     this.Store_name='My Gallery',
     this.Store_logo='./assets/banner.jpg',
     this.ClientName='Bassem',
     this.IsPurshased=true
     this.ProductList=[
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
     this.CategoryList=[
       {
         Id:1,
         Name:"MobilePhone"
       },
       {
        Id:2,
        Name:"Laptop"
      },
      {
        Id:3,
        Name:"Watch"
      },
     ]

    }
    Discount:DiscountOffers ;
    Nodisc:boolean=true;
    Store_name:string ;
    Store_logo:string;
    ProductList:IProducts[];
    CategoryList:ICategory[];
    ClientName:string;
    IsPurshased:boolean;
    Storename:string="Online Store"
    dataUserEntered="default data";
    Purshased()
    {this.IsPurshased=false;}

    arr=[1,2,3,4,5,1];



    productList:any;  
    ProductID:any;  
  
  
    renderValues(){
  
      return this.productList=this.productService.GetAllProducts();
    }
    
    


  ngOnInit(): void {
  }

}
