import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee.model';
import {PersonModel} from "../../model/person.model";
import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {
  constructor(private _employeeService: EmployeeService) { }
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();
}
