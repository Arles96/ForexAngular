import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { FormMessageComponent } from './form-message/form-message.component';
import {FormsModule} from '@angular/forms';
import { ListMessageComponent } from './list-message/list-message.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuComponent,
    HomeComponent,
    FormMessageComponent,
    ListMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
