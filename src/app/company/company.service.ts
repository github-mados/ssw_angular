import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'https://app-fbc-crm-api-prod.azurewebsites.net/api';
  constructor(
    private readonly httpClient:HttpClient
  ) {

   }


   getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error): Observable<Company[]> {
    console.error('implement custom errort handler here', error);
    return new Observable<Company[]>();
  }
  
  // getCompanies () : Company[] {
  //   return [
  //     { name: 'company 1', email: 'email 1', phone: 111 },
  //     { name: 'company 2', email: 'email 2', phone: 111 },
  //     { name: 'company 3', email: 'email 2', phone: 111 }
  //   ];
  // }
}
