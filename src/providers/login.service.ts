import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  constructor(public http: Http) {}

  login(credentials): Promise<any> {
    const url = '/auth/login';

    return this.http.post(url, credentials)
    .toPromise()
    .then(response => response.json())
    // response.json().array as ChatMessage[])
    .catch(err => Promise.reject(err || 'err'));
  }
}
