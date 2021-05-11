import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/core/enums';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
  employees!: Employee[];

  constructor() {
    this.employees = [
      {
        id: 1,
        name: 'John Doe',
        username: 'JohnDoe95',
        dateOfBirth: new Date(1995, 7, 12),
        country: 1,
        area: 'Administrativa',
        commission: 1,
        hiringDate: new Date(2020, 6, 22),
        position: {
          id: 1,
          name: 'Founder & CEO',
          type: 'Position',
          status: Status.Active,
          createdAt: new Date(),
          updatedAt: null,
        },
        status: Status.Active,
        createdAt: new Date(),
        updatedAt: null,
      },
    ];
  }

  ngOnInit(): void {}
}
