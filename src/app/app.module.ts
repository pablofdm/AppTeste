import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BackgroundComponent } from './views/home/background/background.component';
import  { FlexLayoutModule }  from '@angular/flex-layout' ;
import { MatCardModule } from "@angular/material/card";
import { CardsComponent } from './views/home/cards/cards.component';
import { FooterbackgroundComponent } from './views/home/footerbackground/footerbackground.component';
import { FooterComponent } from './views/home/footer/footer.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CardsService } from './cards.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackgroundComponent,
    CardsComponent,
    FooterbackgroundComponent,
    FooterComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
