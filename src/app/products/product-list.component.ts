import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import { ProductService } from './product.service';
import { IAlbum } from './album';

@Component({
    ///Ya no va a haber este tag porque ya lo vamos a llamar directamente desde
    ///el router
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    filteredProducts: IAlbum[];
    pageTitle: string ='Product List'; 
    imageWidth: number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    errorMessage: string;
    
    //listFilter:string='cart';
    _listFilter:string;
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts= this.listFilter? this.performFilter(this.listFilter) : this.products;
    }
    
    products: IAlbum[]=[
    ];

    constructor(private _productService: ProductService){
        
        
    }

    toggleImage():void{
        this.showImage=!this.showImage;
    }
    ngOnInit(): void {
        console.log('On init');
        this._productService.getProducts()
                    .subscribe(products => {
                        this.products = products;
                        this.filteredProducts=this.products;
                    },
                                error=>this.errorMessage=<any>error);
        
    }
    performFilter(filteredBy: string): IAlbum[] {
        filteredBy=filteredBy.toLocaleLowerCase();
        return this.products.filter(
            (product:IAlbum)=>
            product.title.toLocaleLowerCase().indexOf(filteredBy)!==-1);
    }
    onRatingClicked(message:string):void{
        this.pageTitle='Product Lista: '+message;
    }
    
}