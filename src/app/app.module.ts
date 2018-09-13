import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule,
  MatIconModule,
  MatListModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { OutlineComponent } from './outline/outline.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { HomeComponent } from './home/home.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DevFrontComponent } from './front/dev-front/dev-front.component';


import {MatCardModule} from '@angular/material/card';

const appRoutes: Routes = [
  { path: 'outline', component: OutlineComponent },
  { path: '', component: HomeComponent },
  { path: 'front', component: FrontComponent },
  { path: 'front/:id', component: DevFrontComponent },
  { path: 'back', component: BackComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OutlineComponent,
    FrontComponent,
    BackComponent,
    HomeComponent,
    MyNavComponent,
    DevFrontComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
