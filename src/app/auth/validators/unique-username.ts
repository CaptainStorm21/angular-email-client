import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AsyncValidator, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class UniqueUsername implements AsyncValidator{

  constructor(private http: HttpClient) { }

  validate = (control: FormControl) => {
    const { value } = control;
    // console.log(value);
    // console.log(this.http);
    // return null;

    //            generic annotation
    // we are telling TS that we are getting any kind ov value
    // as a result of this post request
    return this.http.post<any>('https://api.angular-email.com/auth/username',
      {
        username: value
      });
    // open devtools and click on network request start typing a username
    // after 3rd character, watch the validation happen sycnh then asynch
    // in short
    // angualr rules local validations then sends a request to the backend
    // once the local validation had been passed

    // if you enter "asdf" --- response will be  "in use"
    // if you enter 'dude' --- response will be 'available 
  }
}

