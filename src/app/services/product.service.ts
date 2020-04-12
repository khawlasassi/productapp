import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { product } from '../product.model';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
URL : string = "http://localhost:8080";

  constructor(private http : HttpClient) { }


  AddProduct(formData : FormData){
    this.http.post(this.URL+'/products/Product/add',formData).subscribe(res=>{
          console.log(res);
       });
  }
  GetListOfProduct():Observable<product[]>{

    return this.http.get<product[]>(this.URL+'/products')
    .pipe(
      catchError(this.handleError<product[]>('getProducts', []))
    );

  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
