import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Employee } from '@app/core/types/models/employee.type';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent implements OnInit {
  @Input() employees!: Employee[];

  @Output() clickNew = new EventEmitter<void>();
  @Output() clickEdit = new EventEmitter<number>();
  @Output() clickPreview = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() {
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickPreview = this.onClickPreview.bind(this);
  }

  ngOnInit(): void {}

  calculateEmployeeName({ name, position }: Employee): string {
    return `${name} (${position?.name})`;
  }

  onClickEdit({ row }: any): void {
    this.clickEdit.emit(row.data.id);
  }

  onClickPreview({ row }: any): void {
    this.clickPreview.emit(row.data.id);
  }

  onClickNewEmployee(): void {
    this.clickNew.emit();
  }

  onRowRemoved({ key }: { key: number }) {
    this.delete.emit(key);
  }
}
