import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { PathName } from 'src/app/core/enums';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent implements OnInit {
  @Input() employees!: Employee[];

  constructor(private router: Router) {
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickPreview = this.onClickPreview.bind(this);
  }

  ngOnInit(): void {}

  onClickEdit({ row }: any): void {
    this.router.navigate([PathName.Employees, 'edit', row.data.id]);
  }

  onClickPreview({ row }: any): void {
    this.router.navigate([PathName.Employees, 'preview', row.data.id]);
  }
}
