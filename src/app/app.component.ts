import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comment } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public stcomments: Comment[] = [];
  constructor(private _freeapiservice: freeApiService) {

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
