import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee'
import { environment } from 'src/environments/environment';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Injectable({
  providedIn: 'root'
})
export class SkillsDbService {

  private readonly BASE_URL = environment.employeeApiBaseUrl;


  itemsURL = "http://localhost:3000/employees";


  employee: Employee = {

    employeeName: "",
    email: "",
    angular: 0,
    javascript: 0,
    html: 0,
    css: 0,
    region: "",
    startdate: ""
  }


  employeeList: Employee[];

  constructor(private http: HttpClient) { }

  getEmployeeApi(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employees`)
  }


  getEmployeeDesc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesDesc`)
  }


  sortEmployeeIdDesc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortIdDsc`)
  }

  sortEmployeeNameAsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortName`)

  }

  sortEmployeeNameDsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortNameDsc`)

  }


  sortAngularAsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortAngular`)

  }

  sortAngularDsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortAngularDsc`)

  }

  sortJsDsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortJsDsc`)

  }


  sortJsAsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortJs`)

  }

  sortHtmlDsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortHtmlDsc`)

  }


  sortHtmlAsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortHtml`)

  }

  sortCssDsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortCssDsc`)

  }


  sortCssAsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortCss`)

  }

  sortEmailDsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortEmailDsc`)

  }


  sortEmailAsc(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employeesSortEmail`)

  }


  addEmployee(item: Employee): Observable<Employee> {
    // console.log(item)
    return this.http.post<Employee>(`${this.BASE_URL}/employees/`, item);
  }

  getEmployee(id) {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employees/${id}`)
  }

  changeEmail(item): Observable<void> {
    // console.log(item)
    return this.http.put<void>(`${this.BASE_URL}/employees/${item.id}`, item);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/employees/${id}`)
    // console.log("delete!")
  }


  getEmployees(): Employee[] {
    return this.employeeList;
  }
}
