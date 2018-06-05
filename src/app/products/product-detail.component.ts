import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  //se supone que como no es un subcomponente, sino una pagina, por eso no tiene
  //selector
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string='Product detail';
  product: IProduct;

  constructor(private _route:ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
  }

}
