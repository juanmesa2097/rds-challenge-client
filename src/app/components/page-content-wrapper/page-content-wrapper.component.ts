import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-content-wrapper',
  templateUrl: './page-content-wrapper.component.html',
  styleUrls: ['./page-content-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageContentWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
