import {Injectable} from "@angular/core";
import { Storage } from "./storage"
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()

export class StorageDataService {
  private api_url = 'http://localhost:3000/';

  constructor(private http: Http){
  }

  getStorages(){
    let url = this.api_url + 'storages.json';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.get(url).map((res) => {
      res.json()
    }).catch( (error: any) => Observable.throw(error.message+ " :::::::::::SERVICE"));
  }
}
