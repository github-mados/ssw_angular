import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from '../company/company';


@Component({
  selector: 'fbc-company-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {
  companies: Company[] = []

  ngOnInit(){
    this.companies = [
      {name:'a', email:'email',phone:12345},
      {name:'b', email:'email',phone:12345},
      {name:'b', email:'email',phone:12345},
      ]
  
  }

}


