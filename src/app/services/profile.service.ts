import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  baseUrl = 'http://localhost:8080';
  constructor(private HttpClient:HttpClient) { }


  addProfile(profileForm:any):Observable<any>{
    return this.HttpClient.post<Profile>(`${this.baseUrl}/profile`,profileForm);
  }

  profileList():Observable<any>{
    return this.HttpClient.get<Profile>(`${this.baseUrl}/profile`)
  }


  viewProfile(id:any):Observable<any>{
    return this.HttpClient.get<Profile>(`${this.baseUrl}/profile/${id}`)
  }


  deleteProfile(id:any):Observable<any>{
    return this.HttpClient.delete(`${this.baseUrl}/profile/${id}`)
  }


  updateProfile(id:any,profileForm:any):Observable<any>{
    return this.HttpClient.post<Profile>(`${this.baseUrl}/profile/update/${id}`,profileForm)
  }
  
}
