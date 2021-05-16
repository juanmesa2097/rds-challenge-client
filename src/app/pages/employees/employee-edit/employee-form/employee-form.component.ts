import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Area, Country, Position } from '@app/core/types';
import { Employee } from '@app/core/types/models/employee.type';
import { OperationType } from '@app/core/types/operation.type';
import { calculateAge } from '@app/core/utils';
import { DxFormComponent } from 'devextreme-angular';
import dxForm from 'devextreme/ui/form';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent implements OnInit {
  @ViewChild('form') form!: DxFormComponent;

  @Input() employee!: Employee | null;
  @Input() countries!: Country[] | null;
  @Input() areas!: Area[] | null;
  @Input() positions!: Position[] | null;
  @Input() operationType!: OperationType;

  @Output() changeArea = new EventEmitter<number>();
  @Output() goBack = new EventEmitter<void>();
  @Output() save = new EventEmitter<Employee>();

  submitButtonDisabled = true;
  comissionVisible = false;

  employeeData: Partial<Employee> = {};

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.employeeData = { ...this.employee };

    const { positionId } = this.employeeData;
    if (positionId) {
      this.validateCommission(positionId);
    }

    this.validateAge = this.validateAge.bind(this);
    this.onCountryChanged = this.onCountryChanged.bind(this);
    this.onAreaChanged = this.onAreaChanged.bind(this);
    this.onPositionChanged = this.onPositionChanged.bind(this);
    this.onClickGoBack = this.onClickGoBack.bind(this);
  }

  public resetForm(): void {
    this.form.instance.resetValues();
    this.employeeData.status = true;
  }

  public focusControl(dataField: keyof Employee): void {
    this.form.instance.getEditor(dataField)?.focus();
  }

  validateAge({ value }: { value: string }): boolean {
    const dateOfBirth = new Date(value);
    return calculateAge(dateOfBirth) >= 18;
  }

  onContentReady({ component }: any) {
    if (this.operationType === 'new') {
      component.getEditor('name').focus();
    }

    // this.validateForm(component);
  }

  onFieldDataChanged({ component }: any) {
    // this.validateForm(component);
  }

  onCountryChanged({ value }: { value: string }) {
    const country = this.countries?.find((c) => c.name === value);
    this.employeeData.countryFlagUrl = country?.flag;
    this.cdr.detectChanges();
  }

  onAreaChanged({ value }: { value: number }): void {
    this.employeeData.positionId = null;
    this.changeArea.emit(value);
  }

  onPositionChanged({ value }: { value: number }): void {
    this.validateCommission(value);
  }

  onClickGoBack(): void {
    this.goBack.emit();
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.validateForm(this.form.instance)) {
      this.save.emit(this.employeeData as Employee);
    }
  }

  private validateCommission(positionId: number): void {
    if (positionId === 1) {
      this.comissionVisible = true;
    } else {
      this.comissionVisible = false;
      this.employeeData.commission = null;
    }

    this.cdr.markForCheck();
  }

  private validateForm(component: dxForm): boolean {
    const { isValid } = component.validate();
    this.submitButtonDisabled = !isValid;
    this.cdr.detectChanges();
    return !!isValid;
  }
}
