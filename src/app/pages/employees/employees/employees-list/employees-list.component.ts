import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Employee } from '@app/core/types/models/employee.type';
import { calculateAge } from '@app/core/utils';

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

  calculateEmployeeAge({ dateOfBirth }: Employee): string {
    return calculateAge(dateOfBirth).toString();
  }

  onClickEdit({ row }: any): void {
    this.clickEdit.emit(row.data.id);
  }

  onClickPreview({ row }: any): void {
    this.clickPreview.emit(row.data.id);
  }

  onToolbarPreparing({ toolbarOptions }: any) {
    toolbarOptions.items.unshift({
      location: 'after',
      widget: 'dxButton',
      options: {
        type: 'default',
        hint: 'Crear nuevo empleado',
        text: 'Crear empleado',
        icon: 'add',
        onClick: () => {
          this.clickNew.emit();
        },
      },
      showText: 'auto',
    });
  }

  onRowRemoved({ key }: { key: number }) {
    this.delete.emit(key);
  }
}
