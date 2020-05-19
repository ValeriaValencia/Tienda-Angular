import { Component, OnInit } from '@angular/core';
import { ProductosAPIService } from '../productos-api.service';
import {Producto} from '../producto'



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductosAPIService] 
})
export class ProductosComponent implements OnInit {

  public producto : Producto[];

  constructor(private api: ProductosAPIService){}

  ngOnInit(){
    this.api.getProducts()
    .subscribe(
      result => {
      console.log(result);
      this.producto = result;
    })
  }

modal() {
    alert('hola');
  }
}
