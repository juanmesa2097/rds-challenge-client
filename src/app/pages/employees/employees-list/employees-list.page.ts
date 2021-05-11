import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  templateUrl: './employees-list.page.html',
  styleUrls: ['./employees-list.page.scss'],
})
export class EmployeesListPage implements OnInit {
  employees!: Employee[];

  constructor() {}

  ngOnInit(): void {}
}
