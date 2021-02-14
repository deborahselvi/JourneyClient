import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiRequestService: ApiRequestService
  ) { }

  addUserToRoom(url: string, body: any) {
    return this.apiRequestService.postMethod(url, body);
  }
}
