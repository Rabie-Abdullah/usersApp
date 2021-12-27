import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { EditUserComponent } from './views/edit-user/edit-user.component';
import { UsersComponent } from './views/users/users.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SingleUserComponent } from './views/single-user/single-user.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EditUserComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
