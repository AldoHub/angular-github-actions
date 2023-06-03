import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public server:string = "https://jsonplaceholder.typicode.com"; //posts

  public getAllPosts(): Observable<any>{
    return this.httpClient.get<any[]>(`${this.server}/posts`);
  }


  public getPostById(id:string): Observable<any>{
    return this.httpClient.get<any>(`${this.server}/posts/${id}`);
  }


}
