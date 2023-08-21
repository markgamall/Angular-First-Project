import { Injectable } from '@angular/core';
import { IProduct } from '../SharedClassesAndTypes/I_product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {



  constructor() { }

GetAllProducts():IProduct[]{
  return [
    {
      ID: 1,
      Name: 'Trainers',
      Quantity: 15,
      Price: 450,
      Img: '#'
    },
    {
      ID: 2,
      Name: 'T-Shirt',
      Quantity: 20,
      Price: 350,
      Img: '#'
    },
    {
      ID: 3,
      Name: 'Shorts',
      Quantity: 30,
      Price: 550,
      Img: '#'
    }
  ];
}

getProductById(prdId: number): IProduct | null {
  
  const products = this.GetAllProducts();
  const product = products.find(p => p.ID === prdId);
  return product || null;
}

}
