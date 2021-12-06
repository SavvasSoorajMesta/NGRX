import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';
import { addpost, updatePost } from '../state/post.action';
import { GetPostById } from '../state/post.selector';
import { postState } from '../state/post.state';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  constructor(private store:Store<postState>,private route:Router, private router:ActivatedRoute) { }
  postForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
    this.router.paramMap.subscribe(data => {
      const PostId = data.get('id');
      if(PostId){
        this.store.select(GetPostById, {PostId}).subscribe((data) =>{
          this.postForm.patchValue({
            title: data.title,
            description: data.description
          })
        })
      }
    })
  }

  createForm(){
    this.postForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null)
    });
  }
  

  addpost(form: NgForm){
    console.log(this.postForm.value);

    this.postForm.reset(this.postForm.value);
    const PostData:Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(addpost({post:PostData}));
    this.createForm();

    this.route.navigate(['post'])
    

  }
}
