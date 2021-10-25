import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectDto, Task } from 'src/app/shared/employee.model';


@Component({
  selector: 'app-emp-crud',
  templateUrl: './emp-crud.component.html',
  styleUrls: ['./emp-crud.component.css']
})
export class EmpCrudComponent implements OnInit {
 projectData = new ProjectDto();
 taskData=new Task();
 projectName:string=''

  constructor( public dialogRef: MatDialogRef<EmpCrudComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
   if(data['editProject']=='editProject'){
     this.projectName=data['projectName']
   }
  }

  ngOnInit(): void {
  }

  resetForm(){
    this.projectData=new ProjectDto();
  }
  saveForm(){
    this.dialogRef.close({flag:true, projectData:this.projectData})
  }
  saveTask(){
    this.dialogRef.close({flag:true, taskData:this.taskData})
  }
  
  updateProject(){
    this.dialogRef.close({flag:true, projectName:this.projectName})
  }
  cancel(){
    this.dialogRef.close({flag:false})
  }

}
