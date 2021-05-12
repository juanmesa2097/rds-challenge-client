import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumb } from '@app/core/interfaces/breadcrumbs.interface';

@Component({
  templateUrl: './employee-edit.page.html',
  styleUrls: ['./employee-edit.page.scss'],
})
export class EmployeeEditPage implements OnInit {
  breadcrumbs: Breadcrumb[];
  title!: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const snapshot = this.activatedRoute.snapshot;
    const currentRoute = snapshot.url[0].path;

    switch (currentRoute) {
      case 'create':
        this.title = 'Crear empleado';
        break;
      case 'edit':
        this.title = 'Editar empleado';
        break;
      case 'preview':
        this.title = 'Ver empleado';
        break;
      default:
        this.title = '';
    }

    this.breadcrumbs = snapshot.data.breadcrumbs;
  }

  ngOnInit(): void {}
}
