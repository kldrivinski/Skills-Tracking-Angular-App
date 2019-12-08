import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SkillsDbService } from '../services/skills-db.service';
import { Employee } from '../interfaces/employee'


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {


  employee: Employee;

  start: boolean = true;



  angular: number[] = [1, 2, 3, 4, 5];


  employeeList: any[];

  constructor(private employeeApiService: SkillsDbService, private router: Router) { }



  addEmployee(form: NgForm) {
    // this.employeeApiService.addEmployee(form.value);
    // // console.log(form.value)
    this.start = !this.start;
    this.employeeApiService.addEmployee(form.value).subscribe(
      () => {
        this.loadEmployees();
      }
    )
    console.log(this.employeeList);
  }


  loadEmployees() {
    this.employeeApiService.getEmployeeApi().subscribe(employees => {
      this.employeeList = employees;
      console.log(this.employeeList)
    })
  }

  ngOnInit() {
    this.loadEmployees();
    // console.log(this.employeeList);
  }


}
