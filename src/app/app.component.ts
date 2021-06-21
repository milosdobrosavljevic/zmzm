import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comment } from './classes/comments';
import { Post } from './classes/posts';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public stcomments: Comment[] = [];
  public stpost: Post[] = [];
  constructor(private _freeapiservice: freeApiService) {

  }

  onpost(a:string,b:string,c:string,e:number,f:number,d:string)
  {
    var productdata={
      id:a,
      name:b,
      description:c,
      price:e,
      discount:f,
      type:d
    }
    this._freeapiservice.getpost(productdata).subscribe(data => {
      console.log("Posted id:"+productdata);
    });
  }

  onclick1(b:string){
  this._freeapiservice.getdelete(b).subscribe(data => {
    console.log("Deleted id:"+b);
  });
  }
  ngOnInit() {
    this._freeapiservice.getcomments()
      .subscribe(
        (data) => {
          this.stcomments = data;
          console.log(this.stcomments);
        }
      );

      
  }
}
