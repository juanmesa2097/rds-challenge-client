import { Component } from '@angular/core';
import { DevExtremeGlobalConfiguration } from './core/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    DevExtremeGlobalConfiguration.runGlobal();
    DevExtremeGlobalConfiguration.runControls();
  }
}
