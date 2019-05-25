import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedComponent } from './components/private/feed/feed.component';
import { PnavbarComponent } from './components/private/pnavbar/pnavbar.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { ForumComponent } from './components/public/forum/forum.component';
import { HomeComponent } from './components/public/home/home.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { TarjetaComponent } from './components/public/tarjeta/tarjeta.component';
import { SignInComponent } from './components/public/sign-in/sign-in.component';
import { LogInComponent } from './components/public/log-in/log-in.component';
import { NewsCardComponent } from './components/public/news-card/news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PnavbarComponent,
    ProfileComponent,
    ForumComponent,
    HomeComponent,
    NavbarComponent,
    BlogComponent,
    FooterComponent,
    TarjetaComponent,
    SignInComponent,
    LogInComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
