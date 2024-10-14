import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from '../company/company';
import { CompanyService } from '../company/company.service';


@Component({
  selector: 'fbc-company-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {
  private readonly companyService = inject(CompanyService);
  companies: Company[] = []

  
  ngOnInit(){
    this.companies = this.companyService.getCompanies();
  
  }

}


