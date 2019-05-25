import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/public/home/home.component';
import { ForumComponent } from './components/public/forum/forum.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/public/blog/blog.component';
import { LogInComponent } from './components/public/log-in/log-in.component';
import { SignInComponent } from './components/public/sign-in/sign-in.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'foro', component: ForumComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signin', component: SignInComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
