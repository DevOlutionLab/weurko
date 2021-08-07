import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Site } from '../models/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http: HttpClient) { }

  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(`${environment.baseUrl}/sites`);
  }

  getSiteById(id: any): Observable<Site> {
    return this.http.get<Site>(`${environment.baseUrl}/sites/${id}?_expand=address&_expand=partner`);
  }

  getPartnerSites(id: any): Observable<Site[]> {
    return this.http.get<Site[]>(`${environment.baseUrl}/sites?partnerId=${id}&_expand=address`);
  }
}
