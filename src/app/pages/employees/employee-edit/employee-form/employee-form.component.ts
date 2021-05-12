import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Employee } from '@app/core/models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent implements OnInit {
  submitButtonDisabled = true;

  employeeData: Partial<Employee> = {};

  constructor() {}

  ngOnInit(): void {}

  onFieldDataChanged({ component }: any) {
    const { brokenRules } = component.validate();
    this.submitButtonDisabled = brokenRules.length > 0;
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    console.log(this.employeeData);
  }
}