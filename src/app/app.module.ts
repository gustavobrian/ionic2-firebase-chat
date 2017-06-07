import { UserProfilePage } from './../pages/user-profile/user-profile';
import { UserInfoComponent } from './../components/user-info/user-info.component';
import { MessageBoxComponent } from './../components/message-box/message-box.component';
import { MessageService } from './../providers/message.service';
import { ChatService } from './../providers/chat.service';
import { ChatPage } from './../pages/chat/chat';
import { CapitalizePipe } from './../pipes/capitalize.pipe';
import { SigninPage } from './../pages/signin/signin';
import { AuthService } from './../providers/auth.service';
import { HttpModule } from '@angular/http';
import { UserService } from './../providers/user.service';

import { SignupPage } from './../pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule, FirebaseAppConfig, AuthProviders, AuthMethods } from 'angularfire2';
import { CustomLoggedHeaderComponent } from '../components/custom-logged-header/custom-logged-header.component';
import { UserMenuComponent } from '../components/user-menu/user-menu.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';


const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAR3LT-OLOWU9rVCh_PyV5syNTI8j9IVsQ",
  authDomain: "ionic2-chat-510b6.firebaseapp.com",
  databaseURL: "https://ionic2-chat-510b6.firebaseio.com",
  storageBucket: "ionic2-chat-510b6.appspot.com",
  messagingSenderId: "97170122434"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    ChatPage,
    UserProfilePage,
    CustomLoggedHeaderComponent,
    CapitalizePipe,
    MessageBoxComponent,
    UserInfoComponent,
    UserMenuComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig, firebaseAuthConfig),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    ChatPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    ChatService,
    MessageService
  ]
})
export class AppModule { }
