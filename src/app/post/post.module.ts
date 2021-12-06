import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';
import { AddpostComponent } from './addpost/addpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './state/post.reducer';

const route: Routes = [{
  path:'post', component: PostlistComponent,
  children: [
    {
      path:'addpost', component: AddpostComponent
    },
    {
      path:'edit/:id', component: EditpostComponent
    }
  ]
}];

@NgModule({
  declarations: [
    PostlistComponent,
    AddpostComponent,
    EditpostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('post',postReducer),
    RouterModule.forChild(route)
  ],
  providers:[]
})
export class PostModule { }
