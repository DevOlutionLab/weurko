import { BusinessSector } from './../models/business-sector';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessSectorService {

  constructor(private http: HttpClient) { }

  getBusinessSectors(): Observable<BusinessSector[]> {
    return this.http.get<BusinessSector[]>(`${environment.baseUrl}/businessSectors`);
  }

  getBusinessSectorsById(id: any): Observable<BusinessSector> {
    return this.http.get<BusinessSector>(`${environment.baseUrl}/businessSectors/${id}/?_expand=category`);
  }

  getBusinessSectorsWithPartners(): Observable<BusinessSector[]> {
    return this.http.get<BusinessSector[]>(`${environment.baseUrl}/businessSectors?_embed=partners&_embed=businessSectors`);
  }
}
