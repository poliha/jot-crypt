import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { NotePage } from '../pages/note/note';
import { Page2 } from '../pages/page2/page2';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    Home,
    NotePage,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    NotePage,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, Data]
})
export class AppModule {}
