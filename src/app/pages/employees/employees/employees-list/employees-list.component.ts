import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent implements OnInit {
  @Input() employees!: Employee[];

  @Output() clickEdit = new EventEmitter<number>();
  @Output() clickPreview = new EventEmitter<number>();

  constructor(private router: Router) {
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickPreview = this.onClickPreview.bind(this);
  }

  ngOnInit(): void {}

  onClickEdit({ row }: any): void {
    this.clickEdit.emit(row.data.id);
  }

  onClickPreview({ row }: any): void {
    this.clickPreview.emit(row.data.id);
  }
}
