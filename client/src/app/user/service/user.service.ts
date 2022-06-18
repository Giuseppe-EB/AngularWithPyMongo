import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, Observer } from 'rxjs';

  
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiUrl + '/api/v1';
  //private url = '/api/v1'
  
   
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<any []>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<any []>( this.url + '/users' , {headers : headers});
   
  }
  findById(id : string){
    const headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<string []>( this.url + '/users/' + id  , {headers : headers});

  }
  save(user: string){
    const headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<string>( this.url + '/users' , user, {headers : headers});
   
  }

  update(id:string, user: string){
    const headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
    headers.set('Content-Type', 'application/json; charset=utf-8');
    
    return this.httpClient.post<string>( this.url + '/user/' + id , user, {headers : headers});
    
  }


  login(cred : string[]){

    const headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
    headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log("login service")
    return this.httpClient.post<string>( this.url + '/users/login/', cred , {headers : headers});
    
  }
  
  
}