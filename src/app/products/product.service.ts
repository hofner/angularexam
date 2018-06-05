import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { IAlbum } from './album';




@Injectable()
export class ProductService{

    private _productUrl = 'https://jsonplaceholder.typicode.com/photos'

    constructor(private _http: HttpClient){


    }

    getProducts(): Observable<IAlbum[]>{
        return this._http.get<IAlbum[]>(this._productUrl)
                            .do(data=>console.log('Todos:'+JSON.stringify(data)))
                            .catch(this.handleError);
    }
    private handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);

    }

}