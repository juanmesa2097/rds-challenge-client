import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Area, Country, Position } from '@app/core/types';
import { Employee } from '@app/core/types/employee.type';
import { OperationType } from '@app/core/types/operation.type';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee!: Employee | null;
  @Input() countries!: Country[] | null;
  @Input() areas!: Area[] | null;
  @Input() positions!: Position[] | null;
  @Input() operationType!: OperationType;

  @Output() changeArea = new EventEmitter<number>();
  @Output() save = new EventEmitter<Employee>();

  submitButtonDisabled = true;
  comissionVisible = false;

  employeeData: Partial<Employee> & { areaId?: number | null } = {};

  constructor() {}

  ngOnInit(): void {
    this.employeeData = { ...this.employee };

    const { positionId } = this.employeeData;
    if (positionId) {
      this.validateCommission(positionId);
    }

    this.onAreaChanged = this.onAreaChanged.bind(this);
    this.onPositionChanged = this.onPositionChanged.bind(this);
  }

  onFieldDataChanged({ component }: any) {
    const { isValid } = component.validate();
    this.submitButtonDisabled = !isValid;
  }

  onAreaChanged({ value }: { value: number }): void {
    this.employeeData.positionId = null;
    this.changeArea.emit(value);
  }

  onPositionChanged({ value }: { value: number }): void {
    this.validateCommission(value);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.employeeData);
    this.save.emit(this.employeeData as Employee);
  }

  private validateCommission(positionId: number): void {
    if (positionId === 6) {
      this.comissionVisible = true;
    } else {
      this.comissionVisible = false;
      this.employeeData.commission = null;
    }
  }
}
