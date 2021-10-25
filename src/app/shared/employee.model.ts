
export class ProjectDto {
    _id: any ;
    projectname: string = ''  ;
    taskList: Task[]=[]
}
export class  Task{
    taskname: string= '';
    remarks: string = '';
    employeename:string='';
    status: string = '';
}
