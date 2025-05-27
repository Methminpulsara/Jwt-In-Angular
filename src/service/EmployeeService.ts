import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Employee from "../model/Employee";
import { Observable } from "rxjs";

@Injectable ({providedIn:'root'})

export default class EmployeeService {


  constructor(private http:HttpClient){}

  save(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>("http://localhost:8080/api/employee/add",employee);
  }

  update(employeeId:number,employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`http://localhost:8080/api/employee/update/${employeeId}`, employee);
  }

  getAll():Observable<Employee[]>{
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  return this.http.get<Employee[]>("http://localhost:8080/api/employee/all", { headers });
  }

  delete(employeeId:number){
    return this.http.delete("http://localhost:8080/api/employee/delete/"+employeeId)
  }

  searchByName(name:string):Observable<Employee>{
      return this.http.get<Employee>("http://localhost:8080/api/employee/search/"+name)
  }

}
