import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Admin from "../model/Admin";
import { Observable } from "rxjs";

@Injectable ({providedIn:'root'})

export default class AdminService{

  constructor(private http:HttpClient){}

  register(admin:Admin):Observable<Admin>{
    return this.http.post<Admin>("http://localhost:8080/api/admin/add",admin)
  }
  
  login (admin:Admin):Observable<Admin>{
    return this.http.post<Admin>("http://localhost:8080/api/login",admin)
  }

}