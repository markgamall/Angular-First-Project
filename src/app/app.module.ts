import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule , routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './homee/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponentComponent } from './user-component/user-component.component';
import { PostsComponent } from './postss/posts.component';
import { RegistercompComponent } from './registercomp/registercomp.component';
import { LogincompComponent } from './logincomp/logincomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    routingcomponents,
    PageNotFoundComponent,
    HomeComponent,
    UserComponentComponent,
    PostsComponent,
    RegistercompComponent,
    LogincompComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
