import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dinosaure } from 'src/app/shared/models/dinosaure';

@Injectable({
  providedIn: 'root'
})
export class DinosaureService {

  constructor(private http: HttpClient) { }

  get(classificationId: string): Observable <Dinosaure[]> {
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      params: new HttpParams().append('classificationId', classificationId)
    };
    return this.http.get<Dinosaure[]>('http://localhost:3000/dinosaurs', options);
  }

  getDinosaure(dinosaureId: string): Observable <Dinosaure> {
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      params: new HttpParams().append('id', dinosaureId)
    };
    return this.http.get<Dinosaure>('http://localhost:3000/dinosaurs', options);
  }

  post(dino: Dinosaure): Observable <Dinosaure> {
    return this.http.post<Dinosaure>('http://localhost:3000/dinosaurs', dino);
  }

  delete(dinosaureId: string): Observable <Dinosaure> {
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json')
    };
    return this.http.delete<Dinosaure>('http://localhost:3000/dinosaurs/' + dinosaureId, options);
  }

  put(dinosaureId: string, dino: Dinosaure): Observable <Dinosaure> {
    return this.http.put<Dinosaure>('http://localhost:3000/dinosaurs/' + dinosaureId, dino);
  }
}
