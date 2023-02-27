import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  /**
   * To add and update user
   * @param user User form data
   * @returns 
   */
  newUser(user: any) {
    let url = environment.url + 'users';
    if (user.id) {
      url += '/' + user.id;
    }
    if (user.id) {
      return this.httpService.put(url, user);
    } else {
      return this.httpService.post(url, user);
    }
    
  }

  /**
   * to get all users and also particular user 
   * @param user user id for update
   * @returns 
   */
  getUser(user?: any) {
    let url = environment.url + 'users';
    if (user) {
      url += `/${user}`;
    }
    return this.httpService.get(url);
  }

  /**
   * To delete user
   * @param id to be deleted
   * @returns 
   */
  deleteUser(id:any){
    const url = environment.url + `users/${id}`;
    return this.httpService.delete(url);
  }
}
