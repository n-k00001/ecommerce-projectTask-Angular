import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http={};
  constructor(private httpClient:HttpClient) { 
    this.http={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'Access-token'
      })
    };
  }
  
  signUp(newUser:Iuser):Observable<Iuser>{
    return this.httpClient.post<Iuser>(`${environment.BaseApiUrl}/Users`,JSON.stringify(newUser),this.http);

  }
}
