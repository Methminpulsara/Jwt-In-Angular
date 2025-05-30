import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Employee from "../model/Employee";
import { Observable } from "rxjs";

@Injectable ({
  providedIn:'root'
})

export default class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/employee';

  constructor(private http: HttpClient) {}

  save(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/add`, employee);
  }

  update(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/update/${id}`, employee);
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/all`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  searchByName(name: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/search/${name}`);
  }
}
