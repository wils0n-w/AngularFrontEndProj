import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Telephone } from '../models/telephone';

@Injectable({ providedIn: 'root' })
export class TelephoneService {
  private baseUrl = '/api/TabelTelephone';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Telephone[]> {
    return this.http.get<Telephone[]>(this.baseUrl);
  }

  get(id: number): Observable<Telephone> {
    return this.http.get<Telephone>(`${this.baseUrl}/${id}`);
  }

  create(item: Telephone): Observable<Telephone> {
    return this.http.post<Telephone>(this.baseUrl, item);
  }

  update(id: number, item: Telephone) {
    return this.http.put(`${this.baseUrl}/${id}`, item);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
