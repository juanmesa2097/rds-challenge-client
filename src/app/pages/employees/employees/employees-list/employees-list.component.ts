import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '@app/core/types/employee.type';

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

  constructor(private router: Router) {
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickPreview = this.onClickPreview.bind(this);
  }

  ngOnInit(): void {}

  gets(data: any) {
    console.log(data);
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 70);
  }

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
}
