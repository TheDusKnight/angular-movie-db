import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailpageComponent } from './components/detailpage/detailpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MylistpageComponent } from './components/mylistpage/mylistpage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'mylist', component: MylistpageComponent},
  // {
  //   path: 'watch/movie',
  //   children: [
  //     {path:':id', component: DetailpageComponent},
  //   ]
  // },
  // {
  //   path: 'watch/tv',
  //   children: [
  //     {path:':id', component: DetailpageComponent},
  //   ]
  // },
  
  {
    path:'watch/:type/:id', component: DetailpageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
