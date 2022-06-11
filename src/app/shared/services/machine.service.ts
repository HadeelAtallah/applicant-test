import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Machine } from '../models/machine';

@Injectable({ providedIn: 'root' })
export class MachineService {
  constructor(private http: HttpClient) {}

  //get machines from mock server
  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(`${environment.apiUrl}/machines`);
  }
}
