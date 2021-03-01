import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagListComponent } from './component/tag-list/tag-list.component';
import { TagFormComponent } from './component/tag-form/tag-form.component';

const routes: Routes = [
  { path: 'tags', component: TagListComponent },
  { path: 'addtag', component: TagFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
