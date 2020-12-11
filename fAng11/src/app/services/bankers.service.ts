import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banker } from './banker';

const baseUrl = 'http://localhost:8080/employees';

@Injectable({
  providedIn: 'root'
})
export class BankersService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: { name1: string; dept: string; post: string;
     salary: string; published: boolean; }): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: Banker):
    Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  searchByName(name1: string): Observable<any> {
    return this.http.get(`${baseUrl}?name1=${name1}`);
  }

}
