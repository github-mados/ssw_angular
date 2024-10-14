import { Component,OnInit, Input, Output, EventEmitter, input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../company';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'fbc-company-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-table.component.html',
  styleUrl: './company-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyTableComponent {
  @Input({ alias:'companies'}) 
  companies: Company[] = []

  @Output() 
  companyDeleted = new EventEmitter<number>()

  ngOnChanges(){
    console.log();
  }
  deleteCompany(companyId: number){
    this. companyDeleted.emit(companyId);
    
    }

}
