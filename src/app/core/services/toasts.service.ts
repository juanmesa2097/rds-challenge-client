import { Injectable } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Injectable({
  providedIn: 'root',
})
export class ToastsService {
  private readonly DISPLAY_SUCCESS_TIME = 3000;
  private readonly DISPLAY_ERROR_TIME = 12000;

  constructor() {}

  showSuccess(message: string, displayTime?: number) {
    notify(message, 'success', displayTime || this.DISPLAY_SUCCESS_TIME);
  }

  showInfo(message: string, displayTime?: number) {
    notify(message, 'info', displayTime || this.DISPLAY_SUCCESS_TIME);
  }

  showWarning(message: string, displayTime?: number) {
    notify(message, 'warning', displayTime || this.DISPLAY_SUCCESS_TIME);
  }

  showError(message: string, displayTime?: number) {
    notify(message, 'error', displayTime || this.DISPLAY_ERROR_TIME);
  }
}
