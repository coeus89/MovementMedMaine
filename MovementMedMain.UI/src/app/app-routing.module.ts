import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyaboutComponent } from './myabout/myabout.component';
import { MycontentsComponent } from './mycontents/mycontents.component';

const routes: Routes = [
  {
    path:'',
    component: MycontentsComponent
  },
  {
    path:'about',
    component: MyaboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
