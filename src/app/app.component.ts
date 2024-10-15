import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CompanyListComponent } from "./company/company-list/company-list.component";
import { CompanyService } from './company/company.service';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { CompanyActions } from './+state/company.actions';
import { selectCompanyCount } from './+state/company.selectors';



@Component({
  selector: 'fbc-root',
  standalone: true,
  imports: [AsyncPipe,RouterOutlet,RouterLink, FormsModule, CompanyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Melbourne Angular Workshop';

  store = inject(Store);
  
  date = new Date();
  
  companyCount$ = this.store.select(selectCompanyCount);

  ngOnInit() {
    this.store.dispatch(CompanyActions.loadCompanies());
  }
}


