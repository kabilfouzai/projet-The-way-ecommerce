import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServicesService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:8080';

  public registerMessage(studentData: any) {
    return this.http.post(this.API + '/registerMessage', studentData);
  }

  public getMessage() {
    return this.http.get(this.API + '/getMessage');
  }
  public deleteStudent(id: any) {
    return this.http.delete(this.API + '//deleteMessage?id=' + id);
  }
}
