import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { UserDto } from '../models/user-dto';
import { USER } from '../mocks/mock-data';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  /* Example of how we'd make the call from   
//  constructor(private readonly http: HttpClient) { }

//  getDistinctNames(): Observable<UserDto[]> {
//    return this.http.get<UserDto[]>('api/v1/group/distinctNames');
//  }
//}

/* Basic example for calling mock data from a service - the User class is imported up top, and then the method returns the data from the class
 * based on whatever's there. This structure would be used for things like table generation and data processing */
  constructor() { }

  getUser(): Observable<UserDto[]> {
    return of(USER);
  }
}
