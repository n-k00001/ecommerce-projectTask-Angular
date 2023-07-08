import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICatogry } from '../Models/icatogry';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CatogriesService {

  private http={};
  constructor(private httpclient:HttpClient) 
  {
    this.http={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Access-token'
      })
    };
  }

  getAllCatogries():Observable<ICatogry[]>{
    return this.httpclient.get<ICatogry[]>(`${environment.BaseApiUrl}/catogryList`)
  }
}
