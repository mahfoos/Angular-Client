import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  updateUser(user: User) {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${('http://localhost:8080/user')}/${id}`);
  }

  addUser(employee: Object): Observable<Object> {
    return this.http.post(`${('http://localhost:8080/addUser')}`, employee);
  }

  updateEmployee( value: any): Observable<Object> {
    return this.http.put(`${('http://localhost:8080/updateUser')}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${('http://localhost:8080/deleteUser')}/${id}`, { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get('http://localhost:8080/user');
  }
}