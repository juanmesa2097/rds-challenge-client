import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ColorCode, StatusType } from '@app/core/types';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeStatusComponent implements OnInit {
  @Input() type: StatusType = 'info';
  @Input() text!: string;
  @Input() colorCode: ColorCode = 500;
  @Input() accentColorCode: ColorCode = 400;

  cssClass!: string;

  constructor() {}

  ngOnInit(): void {
    const MAP = {
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      danger: 'red',
    } as const;

    this.cssClass = MAP[this.type as keyof typeof MAP];
  }
}
