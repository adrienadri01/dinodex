import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classification } from 'src/app/shared/models/classification';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  constructor(private http: HttpClient) { }

  get(): Observable <Classification[]> {
    return this.http.get<Classification[]>('http://localhost:3000/classifications');
  }

  getClassification(classificationId: string): Observable <Classification> {
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      params: new HttpParams().append('id', classificationId)
    };
    return this.http.get<Classification>('http://localhost:3000/classifications', options);
  }

  post(classi: Classification): Observable <Classification> {
    return this.http.post<Classification>('http://localhost:3000/classifications', classi);
  }

  delete(classificationId: string): Observable <Classification> {
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json')
    };
    return this.http.delete<Classification>('http://localhost:3000/classifications/' + classificationId, options);
  }

  put(classificationId: string, classi: Classification): Observable <Classification> {
    return this.http.put<Classification>('http://localhost:3000/classifications/' + classificationId, classi);
  }
}
