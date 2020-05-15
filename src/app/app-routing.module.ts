import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CensorComponent } from './works/censor/censor.component';
import { UserListComponent } from './works/user-list/user-list.component';
import { TaskListComponent } from './works/task-list/task-list.component';
import { WorksHederComponent } from './works/works-heder/works-heder.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },

  { path: 'works', component: WorksHederComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'censor' },
      { path: 'censor', component: CensorComponent },
      { path: 'userlist', component: UserListComponent },
      { path: 'tasklist', component: TaskListComponent }
    ]},

    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
