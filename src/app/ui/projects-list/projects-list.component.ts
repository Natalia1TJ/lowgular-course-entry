import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Observable} from "rxjs";
import {PersonModel} from "../../model/person.model";
import {ProjectModel} from "../../model/project.model";
import {ProjectsListService} from "../../services/projects-list.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsListComponent {
  constructor(private _projectslistService: ProjectsListService) { }
  data$: Observable<ProjectModel[] | null> = this._projectslistService.getAll();
}
