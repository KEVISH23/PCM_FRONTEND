import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiUrl:string = 'http://localhost:3000/product'
  categoryUrl = 'http://localhost:3000/category'
  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(params:any):Observable<any>{
    return this.http.get(this.apiUrl+'/',{params})
  }

  getParticularEvent(id:string):Observable<any>{
    return this.http.get(this.apiUrl+`/${id}`)
  }
  getParticularCategory(id:string):Observable<any>{
    return this.http.get(this.categoryUrl+`/${id}`)
  }

  addProduct(data:FormData):Observable<any>{
    return this.http.post(this.apiUrl+'/',data)
  }
  deleteEvent(id:string):Observable<any>{
    return this.http.delete(this.apiUrl+`/${id}`)
  }
  deleteCategory(id:string):Observable<any>{
    return this.http.delete(this.categoryUrl+`/${id}`)
  }
  updateEvent(id:string,data:FormData):Observable<any>{
    return this.http.put(this.apiUrl+`/${id}`,data)
  }
  updateCategory(id:string,data:any):Observable<any>{
    return this.http.put(this.categoryUrl+`/${id}`,data)
  }

  registerAtEvent(id:string):Observable<any>{
    return this.http.post(this.apiUrl+`/${id}/register`,{})
  }

  getAllRegistrationForEvent(id:string):Observable<any>{
    return this.http.get(this.apiUrl+`/${id}/registration`)
  }

  getAllCategory():Observable<any>{
    return this.http.get(this.categoryUrl + '/')
  }
  addCategory(data:any):Observable<any>{
    return this.http.post(this.categoryUrl + '/',data)
  }


  getCounts():Observable<any>{
    return this.http.get(this.apiUrl+"/getCounts")
  }




}
