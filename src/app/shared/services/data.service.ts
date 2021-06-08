import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getHeaderData(): any {
    return this.http.get<any>('./assets/header.json');
  }

  getFooterData(): any {
    return this.http.get<any>('./assets/footer.json');
  }

}
