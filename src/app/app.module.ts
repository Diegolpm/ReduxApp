import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './components/contador/hijo/hijo.component';
import { NietoComponent } from './components//contador/nieto/nieto.component';
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './common/ngrx/reducers/contador.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { GameComponent } from './components/game/game.component';
import { ContadorComponent } from './components/contador/contador.component';
import { mainReducer } from './common/ngrx/reducers/mainchar.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent,
    GameComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      contador: contadorReducer,
      mainChar: mainReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
