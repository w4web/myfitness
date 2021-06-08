import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  getLoginFields() {
    return this.http.get<any>('./assets/loginFormFields.json');
  }

  getRegisterFields() {
    return this.http.get<any>('./assets/registerFormFields.json');
  }
  
}
