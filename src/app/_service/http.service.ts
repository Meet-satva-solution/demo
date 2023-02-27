import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { NzNotificationService } from 'ng-zorro-antd/notification/notification.service';
import { Observable, map, catchError, throwError } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private notification: NzNotificationService
  ) { }

  post(url: any, data: any): Observable<any> {
    return this.http.post(url, data).pipe(map((res: any) => {
      this.notification.success('Successfully ', 'Successfully data saved', { 'nzPauseOnHover': true, nzDuration: 3000 });
      return res;
    }), catchError((error: any) => {
      this.notification.error('Failed ', 'Failed to save data', { 'nzPauseOnHover': true, nzDuration: 3000 });
      return throwError(() => new Error(error));
    }));
  }

  get(url: any): Observable<any> {
    return this.http.get(url).pipe(map((res: any) => {
      this.notification.success('Successfully ', 'Successfully get data', { 'nzPauseOnHover': true, nzDuration: 3000 });
      return res;
    }), catchError((error: any) => {
      this.notification.error('Failed ', 'Failed to get data', { 'nzPauseOnHover': true, nzDuration: 3000 });
      return throwError(() => new Error(error));
    }));
  }

  put(url: any,data:any): Observable<any> {
    return this.http.put(url,data).pipe(map((res: any) => {
      this.notification.success('Successfully ', 'Successfully data updated', { 'nzPauseOnHover': true, nzDuration: 3000 });
      return res;
    }), catchError((error: any) => {
      this.notification.error('Failed ', 'Failed to update data', { 'nzPauseOnHover': true, nzDuration: 3000 });
      return throwError(() => new Error(error));
    }));
  }

  delete(url: any): Observable<any> {
    return this.http.delete(url).pipe(map((res: any) => {
      this.notification.success('Successfully ', 'Successfully data deleted', { 'nzPauseOnHover': true, nzDuration: 3000 });
      return res;
    }), catchError((error: any) => {
      this.notification.error('Failed ', 'Failed to delete data', { 'nzPauseOnHover': true, nzDuration: 3000 });
      return throwError(() => new Error(error));
    }));
  }

}
