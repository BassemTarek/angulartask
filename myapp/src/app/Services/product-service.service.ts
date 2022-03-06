import { IProducts } from './../Shared Classes and types/IProduct';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  ProductList:Array<IProducts>=[
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

  private _url:string="/assets/Data/Products.json";

  GetAllProducts():Observable<IProducts[]>
   {
     return this.http.get<IProducts[]>(this._url).pipe(catchError(err =>
      {
        return throwError (err.Message || "Server Error")
      }));
     
   }

  // GetAllProducts() {
  //   return this.ProductList;
   
  // }



  
  ProductListID!:any;

  GetProductById(id:any) {

    if(typeof id == 'number')
    {

     this.ProductList.filter((e)=>{
       if(e.Id===id){
        this.ProductListID=e;
       }

     });
     return this.ProductListID;

    }else{
      return null;
    }
 
  }
}
