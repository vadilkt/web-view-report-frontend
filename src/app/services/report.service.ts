// src/app/services/report.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private apiUrl = 'http://localhost:8080/report'; 

  constructor(private http: HttpClient) {}

  downloadReport(format: string): Observable<Blob> {
    const url = `${this.apiUrl}/download?format=${format}`;
    return this.http.get(url, { responseType: 'blob' });
  }

  viewReport(): Observable<Blob> {
    const url = `${this.apiUrl}/view?format=pdf`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
