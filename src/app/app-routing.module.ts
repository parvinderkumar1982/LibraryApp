import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { LibraryComponent } from './library/library.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {path:'', component:UsersComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'posts', component:PostsComponent},
  {path:'library',component:LibraryComponent},
  {path:'members',component:MembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
