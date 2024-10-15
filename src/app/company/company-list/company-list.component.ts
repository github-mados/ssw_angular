import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';
import { CompanyTableComponent } from '../company-table/company-table.component';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCompanies } from '../../+state/company.selectors';


@Component({
  selector: 'fbc-company-list',
  standalone: true,
  imports: [CommonModule,CompanyTableComponent, RouterLink],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {
  private readonly store = inject(Store);
  private readonly companyService = inject(CompanyService);

  public companies$ = this.store.select(selectCompanies);

  deleteCompany(companyId: number){
    this.companyService.deleteCompany(companyId)
    .subscribe();
    }

}


