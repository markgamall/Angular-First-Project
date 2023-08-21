import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../SharedClassesAndTypes/dis_enum';
import { IProduct } from '../SharedClassesAndTypes/I_product';
import { ICategory } from '../SharedClassesAndTypes/I_category';
import { ProductServiceService } from '../servicess/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount: DiscountOffers = DiscountOffers.Status;;
  StoreName: string = "H&M";;
  StoreLogo: string= "assets/hm.jpg";
  ProductList: IProduct[]= []; 
  CategoryList: ICategory[]= [{ID:1,Name:"Mark"},{ID:2,Name:"Mazen"},{ID:3,Name:"Fady"}]; 
  ClientName: string= "Pedri";
  IsPurshased: boolean=true;
   
  constructor(private prdservice : ProductServiceService) {
  }

ngOnInit() {
   // this.rendervalue();
}

toggletable(){
  this.IsPurshased=!this.IsPurshased;
}
rendervalue(){
  this.ProductList=this.prdservice.GetAllProducts();}

}
