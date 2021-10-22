import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-emp-crud',
  templateUrl: './emp-crud.component.html',
  styleUrls: ['./emp-crud.component.css']
})
export class EmpCrudComponent implements OnInit {
 employeeData = new Employee();
  constructor( public dialogRef: MatDialogRef<EmpCrudComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  resetForm(){
    this.employeeData=new Employee();
  }
  saveForm(){
    this.dialogRef.close({flag:true, employeeData:this.employeeData})
  }
  cancel(){
    this.dialogRef.close({flag:false})
  }

}
