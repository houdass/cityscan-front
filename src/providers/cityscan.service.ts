import { Injectable } from '@angular/core';
import {Http, ResponseContentType, URLSearchParams} from '@angular/http';
import { saveAs } from 'file-saver';

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

  analyze(params): Promise<any> {
    // let search = new URLSearchParams();
    // let key = Object.keys(params)[0];
    // search.append(key, data[key]);

    return this.http.post(`/cityscan/analyze`, params)
    .toPromise()
    .then(response => response.json())
    .catch(err => Promise.reject(err || 'err'));
  }

  pdf(): Promise<any> {
    return this.http.get(`/cityscan/pdf`, { responseType: ResponseContentType.Blob })
    .toPromise()
    .then(response => {
      var blob = new Blob([response.blob()], { type: 'application/pdf' });
      return saveAs(blob, 'cityscan.pdf');
    })
    .catch(err => Promise.reject(err || 'err'));
  }
}
