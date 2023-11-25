import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  login(doc: any, pass: any, docType: any) {
    return this.http.post<any>('http://localhost:8081/auth/login', 
      { document: doc,
        password: pass,
        documentType: docType  })
    
  }
}
