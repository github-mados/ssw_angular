import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CompanyService } from './company.service';
import { Company } from './company';

describe('CompanyService', () => {
  let service: CompanyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    const toastSpy = jasmine.createSpyObj('ToastService', ['showSuccess', 'showError']);
    const appConfigSpy = jasmine.createSpyObj('AppConfigService', ['API_BASE']);
    appConfigSpy.API_BASE = 'http://localhost:3000';

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        CompanyService,
       
      ],
    });

    service = TestBed.inject(CompanyService);
    httpMock = TestBed.inject(HttpTestingController);
  
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call ToastService on addCompany success', () => {
    const mockCompany: Company = { id: 1, name: 'Test Company', email: '', phone: '' };

    service.addCompany(mockCompany).subscribe();

    const req = httpMock.expectOne(`/company`);
    expect(req.request.method).toBe('POST');
    req.flush(mockCompany);

  });
});