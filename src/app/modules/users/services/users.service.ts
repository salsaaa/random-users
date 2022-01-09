import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getUsersUrl } from '../../../../utils/helper';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(
    page: Number = 1,
    nat: String = '',
    gender: String = '',
    canExport: Boolean = false,
    count: Number = 12
  ) {
    return this.httpClient.get(
      getUsersUrl(page, nat, gender, canExport, count)
    );
  }
}
