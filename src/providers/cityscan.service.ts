import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CityScanService {

  constructor(
    public http: Http) {
  }

  getPlaces(city): Promise<any> {
    let search = new URLSearchParams();
    search.append('city', city);
    return this.http.get(`/cityscan/places`, { search })
    .toPromise()
    .then(response => response.json())
    .catch(err => Promise.reject(err || 'err'));
  }

  analyze(data): Promise<any> {
    let search = new URLSearchParams();
    let key = Object.keys(data)[0];
    search.append(key, data[key]);
    return this.http.get(`/cityscan/analyze`, { search })
    .toPromise()
    .then(response => response.json())
    .catch(err => Promise.reject(err || 'err'));
  }
}
