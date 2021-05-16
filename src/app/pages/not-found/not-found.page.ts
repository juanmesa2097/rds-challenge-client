import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathName } from '@app/core/enums';

@Component({
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  pathName = PathName;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickTakeMeBack(): void {
    this.router.navigate(['/', PathName.Employees]);
  }
}
