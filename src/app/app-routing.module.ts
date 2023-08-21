import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './homee/home.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { PostsComponent } from './postss/posts.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
{path:'products',component:ProductsComponent},
{path:'user',component:UserComponentComponent},
{path:'post',component:PostsComponent},
{path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents =[HomeComponent,ProductsComponent,AppComponent,UserComponentComponent]