import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [{path:'user', component:UserComponent},
  {path:'login', component:LoginComponent},
  {path:'updatebook/:id', component:UpdateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
