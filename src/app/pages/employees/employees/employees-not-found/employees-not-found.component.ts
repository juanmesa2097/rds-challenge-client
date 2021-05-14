import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-employees-not-found',
  templateUrl: './employees-not-found.component.html',
  styleUrls: ['./employees-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesNotFoundComponent implements OnInit {
  @Output() createEmployee = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClickCreate(): void {
    this.createEmployee.emit();
  }
}
