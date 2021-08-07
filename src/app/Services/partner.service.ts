import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Partner } from '../models/Partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: HttpClient) { }

  getPartners(): Observable<Partner[]> {
    return this.http.get<Partner[]>(`${environment.baseUrl}/partners`);
  }

  getPartnerById(id: any): Observable<Partner> {
    return this.http.get<Partner>(`${environment.baseUrl}/partners/${id}`);
  }

  getFeaturedPartners(): Observable<Partner[]> {
    return this.http.get<Partner[]>(`${environment.baseUrl}/partners?featured=true`);
  }

  getPartnersByCategory(name: string): Observable<Partner[]> {
    return this.http.get<Partner[]>(`${environment.baseUrl}/partners?category.name=${name}`);
  }

  searchPartners(keyword: string): Observable<Partner[]> {
    return this.http.get<Partner[]>(`${environment.baseUrl}/partners?q=${keyword}&_expand=businessSector`);
  }
}
