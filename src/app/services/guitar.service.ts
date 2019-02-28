import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guitar } from '../domain/guitar';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuitarService {

  api:string =  "http://localhost:8081/api/guitars";

  constructor(private httpClient: HttpClient) {
  }


  save(guitar: Guitar): Observable<Guitar> {

    return this.httpClient.post<Guitar>(`${this.api}`, guitar);

  }



}
