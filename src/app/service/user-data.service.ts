import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor( private _HttpClient:HttpClient) { }

  
  getAllUsers(pageNum:number=1) :Observable<any>{

    return this._HttpClient.get(`https://reqres.in/api/users?page=${pageNum}`)
 }

  getUser(id:number):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users/${id}`)
  }
}
