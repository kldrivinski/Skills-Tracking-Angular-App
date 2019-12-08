import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SkillsDbService } from '../services/skills-db.service';
import { Employee } from '../interfaces/employee'


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})


export class EmployeeListComponent implements OnInit {


  employeeList: Employee[];
  add = false;
  edit = false;
  editItem;
  index: number;
  nameClick: number = 1;
  angularClick: number = 1;
  jsClick: number = 1;
  htmlClick: number = 1;
  cssClick: number = 1;
  emailClick: number = 1;
  idClick: number = 1;



  constructor(private employeeApiService: SkillsDbService, private router: Router) { }



  setIndex(index) {
    this.index = index;
  }


  loadEmployees() {
    this.employeeApiService.getEmployeeApi().subscribe(employees => {
      this.employeeList = employees;
      console.log(this.employeeList)
    })
  }


  sortEmployeesId() {
    if (this.idClick % 2 === 0) {
      this.employeeApiService.getEmployeeApi().subscribe(employees => {
        this.employeeList = employees;
      })
      this.idClick++
    }
    else {
      this.employeeApiService.getEmployeeDesc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.idClick++
    }
    console.log(this.idClick);
  }



  sortEmployeeName() {
    if (this.nameClick % 2 === 0) {
      this.employeeApiService.sortEmployeeNameDsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.nameClick++
    }
    else {
      this.employeeApiService.sortEmployeeNameAsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.nameClick++
    }
    console.log(this.nameClick);
  }




  sortAngular() {
    if (this.angularClick % 2 === 0) {
      this.employeeApiService.sortAngularDsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.angularClick++
    }
    else {
      this.employeeApiService.sortAngularAsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.angularClick++
    }
    console.log(this.angularClick);
  }


  sortJs() {
    if (this.jsClick % 2 === 0) {
      this.employeeApiService.sortJsDsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.jsClick++
    }
    else {
      this.employeeApiService.sortJsAsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.jsClick++
    }
    console.log(this.jsClick);
  }



  sortHtml() {
    if (this.htmlClick % 2 === 0) {
      this.employeeApiService.sortHtmlDsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.htmlClick++
    }
    else {
      this.employeeApiService.sortHtmlAsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.htmlClick++
    }
    console.log(this.htmlClick);
  }



  sortCss() {
    if (this.cssClick % 2 === 0) {
      this.employeeApiService.sortCssDsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.cssClick++
    }
    else {
      this.employeeApiService.sortCssAsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.cssClick++
    }
    console.log(this.cssClick);
  }


  sortEmail() {
    if (this.emailClick % 2 === 0) {
      this.employeeApiService.sortEmailDsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.emailClick++
    }
    else {
      this.employeeApiService.sortEmailAsc().subscribe(employees => {
        this.employeeList = employees;
      })
      this.emailClick++
    }
    console.log(this.emailClick);
  };





  editEmail(id: number) {
    this.edit = !this.edit;
    console.log(id);
    this.employeeApiService.getEmployee(id).subscribe(items => {
      this.editItem = items;
      console.log(this.editItem)
    })

  };

  updateEmail(form: NgForm) {
    this.edit = !this.edit;
    this.index = null;
    this.editItem.email = form.value.email;
    console.log(this.editItem);
    this.employeeApiService.changeEmail(this.editItem).subscribe(
      () => {
        this.loadEmployees();
      }
    )
  };





  deleteEmployee(id: number) {
    // calls the delete method on the service, passing it the id to be removed, subscribes to it to update
    this.employeeApiService.deleteEmployee(id).subscribe(
      () => {
        this.loadEmployees();
      });
    console.log(id);
    console.log(this.employeeList);

  }

  ngOnInit() {
    // loads the employees from the service and set a property to hold them
    this.loadEmployees();


  }

}
