import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = "http://localhost:3000/auth"
  constructor(
    private http:HttpClient
  ) { }
  login(data:any):Observable<any>{
    return this.http.post(this.apiUrl+'/login',data)
  }
  register(data:any):Observable<any>{
    return this.http.post(this.apiUrl+'/register',data)
  }
  logout():Observable<any>{
    return this.http.post(this.apiUrl+'/logout',{})
  }

  getUser():Observable<any>{
    return this.http.get(this.apiUrl+"/getUser")
  }

}
