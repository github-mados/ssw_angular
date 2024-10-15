import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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
      return this.httpClient
      .get<Company[]>(`${this.API_BASE}/company`)
      .pipe(
        tap(_ => console.log('loadCompanies called')),
        catchError(this.errorHandler<Company[]>),
      )
  
    }

  getCompany(companyId: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError(this.errorHandler<Company>));
  }

  deleteCompany(companyId: number): Observable<Company> {
    return this.httpClient.delete<Company>(`${this.API_BASE}/company/${companyId}`)
      .pipe(
        catchError(this.errorHandler<Company>));
    }
  
  updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(`${this.API_BASE}/company/${company.id}`,company)
      .pipe(
        catchError(this.errorHandler<Company>));
    }  
   
  addCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(`${this.API_BASE}/company`, {...company,id:0}).pipe(
      catchError(this.errorHandler<Company>)
    );
  }


  private errorHandler<T>(error: any): Observable<T> {
      console.error('Failed to get companies', error);
      return new Observable<T>();
  } 

  // getCompanies () : Company[] {
  //   return [
  //     { name: 'company 1', email: 'email 1', phone: 111 },
  //     { name: 'company 2', email: 'email 2', phone: 111 },
  //     { name: 'company 3', email: 'email 2', phone: 111 }
  //   ];
  // }
}
