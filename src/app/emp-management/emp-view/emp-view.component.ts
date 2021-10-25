import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectDto, Task } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';
import { EmpCrudComponent } from '../emp-crud/emp-crud.component';
declare var M: any;
@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css'],
   animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class EmpViewComponent implements OnInit {
  projectData = new ProjectDto();
  projectList:ProjectDto[]=[];
  dataSource = new MatTableDataSource(this.projectList)
  
displayedColumns=['serial','projectName','addTask','edit','delete','expand']
displayedColumnsFirst=['serial','taskname','empname','remarks','status']

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
             this.projectData=res['projectData']
            this.employeeService.postEmployee(this.projectData).subscribe((res) => {
            
              this.refreshEmployeeList();
              M.toast({ html: 'Saved successfully', classes: 'rounded' });
            });
           }
       })
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.projectList = res as ProjectDto[];
      this.dataSource=new MatTableDataSource(this.projectList)
      console.log(this.projectList)
    },err => {
      this.projectList=[]
      this.dataSource=new MatTableDataSource(this.projectList)
    });
  }
  addaTaskDialog(project:ProjectDto){
    const dialogRef= this.dialog.open(EmpCrudComponent,{
      width:'600px',
      position:{top:'2%'},
      disableClose:true,
      data:{addTask:'addTask'}
    })
    dialogRef.afterClosed().subscribe(res => {
        if(res['flag']){
      
          let taskData=new Task();
          taskData=res['taskData']
          project.taskList.push(taskData);
         this.employeeService.updateProject(project).subscribe((res) => {
         
           this.refreshEmployeeList();
           M.toast({ html: 'Saved successfully', classes: 'rounded' });
         });
        }
    })
  }

  showDetails(event: UIEvent): void {
    event.stopPropagation();
  }

  expandCollapse(row: any, index: number) {
    row.isExpanded = row.isExpanded === true ? false : true;
  }
  deleteProject(id:string){

  }
  editProjectDialog(project:ProjectDto){
    const dialogRef= this.dialog.open(EmpCrudComponent,{
      width:'600px',
      position:{top:'2%'},
      disableClose:true,
      data:{editProject:'editProject',projectName:project.projectname }
    })
    dialogRef.afterClosed().subscribe(res => {
        if(res['flag']){
      
          project.projectname=res['projectName']
     
         this.employeeService.updateProject(project).subscribe((res) => {
         
           this.refreshEmployeeList();
           M.toast({ html: 'Project updated successfully', classes: 'rounded' });
         });
        }
    })
  }
}
