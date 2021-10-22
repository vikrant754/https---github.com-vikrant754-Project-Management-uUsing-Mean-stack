import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';
import { EmpCrudComponent } from '../emp-crud/emp-crud.component';
declare var M: any;
@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit {
  employeeData = new Employee();
  employeeList:Employee[]=[]
  constructor(private dialog :MatDialog,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.refreshEmployeeList();
  }
  addProjectDialog(){
      const dialogRef= this.dialog.open(EmpCrudComponent,{
         width:'600px',
         position:{top:'2%'},
         disableClose:true,
         data:{addProject:'addProject'}
       })
       dialogRef.afterClosed().subscribe(res => {
           if(res['flag']){
             this.employeeData=res['employeeData']
            this.employeeService.postEmployee(this.employeeData).subscribe((res) => {
            
              this.refreshEmployeeList();
              M.toast({ html: 'Saved successfully', classes: 'rounded' });
            });
           }
       })
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeList = res as Employee[];
    });
  }

}
