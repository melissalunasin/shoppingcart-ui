import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productlist } from './productlist';

const productUrl = 'http://localhost:8080/product';

@Injectable({providedIn: 'root'})
export class ProductsService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Productlist> {
        return this.http.get<Productlist>(productUrl);
    }
}