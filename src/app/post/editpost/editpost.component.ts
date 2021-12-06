import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';
import { addpost, updatePost } from '../postlist/state/post.action';
import { GetPostById } from '../postlist/state/post.selector';
import { postState } from '../postlist/state/post.state';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {

  constructor(private store:Store<postState>, private router:ActivatedRoute, private route: Router) { }
  postForm!: FormGroup;
  postId!: number;
  ngOnInit(): void {
    
    this.router.paramMap.subscribe(data => {
      const id = data.get('id');
      if(id){
        this.store.select(GetPostById, {id}).subscribe((data) =>{
          this.postId = data.id;
          this.postForm = new FormGroup({
            title: new FormControl(data.title),
            description: new FormControl(data.description)
          });
        })
      }
    })
  }
  

  updatepost(form: NgForm){
    console.log(this.postForm.value);

    this.postForm.reset(this.postForm.value);
    const PostData:Post = {
      id: this.postId,
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(updatePost({post:PostData}));
    this.route.navigate(['post'])
  }
}
