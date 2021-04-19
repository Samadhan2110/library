import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <<<< import it here
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    UpdateComponent,

  ],
  imports: [AppRoutingModule,
    BrowserModule,
BrowserAnimationsModule,
HttpClientModule,
FormsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
