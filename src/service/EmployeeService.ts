import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Employee from "../model/Employee";
import { Observable } from "rxjs";

@Injectable ({providedIn:'root'})

export default class EmployeeService {
  constructor(private http:HttpClient){}

  private baseUrl ='http://localhost:8080/api/employee';

  save(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.baseUrl}/add`,employee);
  }

  update(employeeId:number,employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}/update/${employeeId}`,employee);
  }

  getAll():Observable<Employee[]>{
  return this.http.get<Employee[]>(`${this.baseUrl}/all`);
  }

  delete(employeeId:number):Observable<void>{
    return this.http.delete<void>(
      `${this.baseUrl}/delete/${employeeId}`
    )
  }

  searchByName(name:string):Observable<Employee>{
      return this.http.get<Employee>(
        `${this.baseUrl}/search/${name}`)
  }

}
