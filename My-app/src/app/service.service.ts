import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { LoginData } from "../model/login.model";
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceService {
  constructor(private http: Http) {}
  private url: string = "http://localhost:3000/";
  public login() {
    return this.http.get(this.url + 'login').map((res)=>{
      
      console.log(JSON.stringify(res));
    })
  }
}
