import { NgModule } from '@angular/core';
import { EmployeesFacesComponent } from './employees-faces.component';
import {Observable} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";
import {EmployeeListComponent} from "../employee-list/employee-list.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeesFacesComponent],
  providers: [],
  exports: [EmployeesFacesComponent]
})
export class EmployeesFacesComponentModule {}
