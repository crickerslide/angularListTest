import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()

export class Services {

  constructor(private httpService: Http){

  }

  toDoService(): Observable<Response>{
    return this.httpService.put("url/toDoList", {}, null);
  }
}
