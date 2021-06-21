import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Comment } from '../classes/comments';
import { Post } from '../classes/posts';

@Injectable({
    providedIn: 'root'
})
export class freeApiService {
    constructor(private httpclient: HttpClient) { }
    public getcomments(): Observable<Comment[]> {
        return this.httpclient.get<Comment[]>("http://localhost:9143/api/products")
    }
    // getcommentsbyparameter(): Observable<Post[]> {
       //  let params1= new HttpParams().set("id","111");
      //  return this.httpclient.get<Post[]>("http://localhost:9143/api/products/1")
    //}
    getdelete(a:string):Observable<Comment[]>{
        return this.httpclient.delete<Comment[]>("http://localhost:9143/api/products/"+a)
    }
    getpost(postdata:object):Observable<Comment[]>{
        return this.httpclient.post<Comment[]>("http://localhost:9143/api/products/",postdata)
    }
}
