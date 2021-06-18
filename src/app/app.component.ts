import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _freeapiservice:freeApiService){
    
   }

  stcomments:Comments[]=[];

  ngOnInit()
  {
    this._freeapiservice.getcomments()
    .subscribe(
      data=>
      {
        this.stcomments=data;
      }
    );
  }
}
