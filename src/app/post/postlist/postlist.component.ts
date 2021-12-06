import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { appState } from 'src/app/store/app.store';
import { deletePost } from '../state/post.action';
import { postselector } from '../state/post.selector';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor(private store:Store<appState>) { }
  postlist$!: Observable<Post[]>
  ngOnInit(): void {

    this.postlist$ = this.store.select(postselector);
  }
  onDelete(ItemID : any){
    this.store.dispatch(deletePost({id: ItemID}));
  }

}
