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
    // used with ngIf to hide the form after done
    this.start = !this.start;
    // call the api to "post" the values of the form to the db
    // resubscribes and loads the new employees
    this.employeeApiService.addEmployee(form.value).subscribe(
      () => {
        this.loadEmployees();
      }
    )
    console.log(this.employeeList);
  }


  loadEmployees() {
    // calls the api to get the list of employees
    this.employeeApiService.getEmployeeApi().subscribe(employees => {
      // sets that list = to the empty variable here
      this.employeeList = employees;
      console.log(this.employeeList)
    })
  }

  ngOnInit() {
    // loads the list from the DB
    this.loadEmployees();
    // console.log(this.employeeList);
  }


}
