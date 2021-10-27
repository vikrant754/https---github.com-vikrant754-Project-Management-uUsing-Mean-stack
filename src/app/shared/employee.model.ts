
export class ProjectDto {
    _id: any    ;
    createdByUser:string='';
    projectname: string = ''  ;
    taskList: Task[]=[]
}
export class  Task{
    taskname: string= '';
    remarks: string = '';
    employeename:string='';
    status: string = '';
}
