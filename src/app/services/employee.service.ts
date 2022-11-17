import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EmployeeModel} from "../model/employee.model";
import {Observable} from "rxjs";
import {PersonModel} from "../model/person.model";
import {ProjectModel} from "../model/project.model";
import {CreateEmployeeModel} from "../model/create-employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('assets/data/people.json');
  }
  create(employee: CreateEmployeeModel): Observable<any> {
    return  this._httpClient.post('url', employee);
  }

}
