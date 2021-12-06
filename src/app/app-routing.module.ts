import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'counter', 
    loadChildren: ()=> import('./Counter/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'post',
    loadChildren: ()=> import('./post/post.module').then(m => m.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
