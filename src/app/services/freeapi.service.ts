import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Comment } from '../classes/comments';

@Injectable({
    providedIn: 'root'
})
export class freeApiService {
    constructor(private httpclient: HttpClient) { }
    public getcomments(): Observable<Comment[]> {
        return this.httpclient.get<Comment[]>("http://localhost:9143/api/products")
    }
}
