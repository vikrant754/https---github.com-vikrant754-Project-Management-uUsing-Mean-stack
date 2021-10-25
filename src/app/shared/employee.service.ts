// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {

//   constructor() { }
// }
 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//import { map } from 'rxjs/operators';

import {  ProjectDto } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedProject: ProjectDto | undefined;
  projects: ProjectDto[] | undefined;
  readonly baseURL = 'http://localhost:3000/api';
  

  constructor(private http: HttpClient) { }

  postEmployee(projectData: ProjectDto) {
    return this.http.post(this.baseURL+'/employ', projectData);
  }

  updateProject(projectData: ProjectDto) {
    return this.http.post(this.baseURL+'/updateEmployee', projectData);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL+'/getAllProjects');
  }

  putEmployee(emp: ProjectDto) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseURL + `/${id}`);
  }

}