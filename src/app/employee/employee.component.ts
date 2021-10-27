// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-employee',
//   templateUrl: './employee.component.html',
//   styleUrls: ['./employee.component.css']
// })
// export class EmployeeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import {  ProjectDto } from '../shared/employee.model';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
 projectData = new ProjectDto();
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    // this.resetForm();
    // this.refreshEmployeeList();   
  }

  resetForm() {
   
  this.projectData = new ProjectDto();

  }
saveForm() {
    console.log(this.projectData);
      this.employeeService.postEmployee(this.projectData).subscribe((res) => {
        this.resetForm();
        this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    
    // else {
    //   this.employeeService.putEmployee(form.value).subscribe((res) => {
    //     // this.resetForm(form);
    //     this.refreshEmployeeList();
    //     M.toast({ html: 'Updated successfully', classes: 'rounded' });
    //   });
    // }
  }

  refreshEmployeeList() {
    // this.employeeService.getEmployeeList().subscribe((res) => {
    //   // this.employeeService.employees = res as ProjectDto[];
    // });
  }

  // onEdit(emp: Employee) {
  //   this.employeeService.selectedEmployee = emp;
  // }

  // onDelete(_id: string, form: NgForm) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //     this.employeeService.deleteEmployee(_id).subscribe((res) => {
  //       this.refreshEmployeeList();
  //       // this.resetForm(form);
  //       M.toast({ html: 'Deleted successfully', classes: 'rounded' });
  //     });
  //   }
  // }

}
