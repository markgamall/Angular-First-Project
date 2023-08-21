import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  title = 'AngularProject';
  @ViewChild(ProductsComponent) prdelement!: ProductsComponent;
 
  ngAfterViewInit() {
   
  }
  
  calll(){
    this.prdelement.IsPurshased=false;
     this.prdelement.rendervalue();
  }
}
