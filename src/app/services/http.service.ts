import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  //toodete toomine. 
  getItemList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Id>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {

      params = new HttpParams().set('ordering', ordering).set('search', search);
    }
    return this.http.get<APIResponse<Id>>(`${env.BASE_URL}/stock/`, {
      params: params,
    });
  }
}
