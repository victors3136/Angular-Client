import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private url = 'http://localhost/server/login.php';
  private username: string | undefined = undefined;

  constructor(private http: HttpClient) {
  }

  submit(username: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {username: username};
    console.log(body);
    this.username = username;
    return this.http.post<any>(this.url, body, {headers: headers});
  }

  getUsername(): string | undefined {
    return this.username;
  }

  logout() {
    this.username = undefined;
  }
}
