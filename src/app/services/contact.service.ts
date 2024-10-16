import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://myportfolio-be-nptr.onrender.com/api/contact'; // Your server's URL

  constructor(private http: HttpClient) { }

  submitContactForm(contactData: any): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }
}
