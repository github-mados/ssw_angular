import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CompanyListComponent } from "./company/company-list/company-list.component";
import { CompanyService } from './company/company.service';
import { map } from 'rxjs';

@Component({
  selector: 'fbc-root',
  standalone: true,
  imports: [AsyncPipe,RouterOutlet,RouterLink, FormsModule, CompanyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Melbourne Angular Workshop';

  companiesService = inject(CompanyService);
  
  date = new Date();

  companyCount$ = this.companiesService
    .getCompanies()
    .pipe(map((companies) => companies.length));
}


