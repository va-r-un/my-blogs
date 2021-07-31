import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    return throwError(error.error || "server error.");
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.url}${path}`,
      body
    ).pipe(catchError(this.handleError));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.handleError));
  }

}
