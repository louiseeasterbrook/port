import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { FirstSectionComponent } from './sections/first-section/first-section.component';
import { SecondSectionComponent } from './sections/second-section/second-section.component';
import { ThirdSectionComponent } from './sections/third-section/third-section.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { FooterComponent } from './sections/footer/footer.component';
import { IconLinksComponent } from './components/icon-links/icon-links.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    NavBarComponent,
    ProjectCardComponent,
    WelcomeCardComponent,
    FooterComponent,
    IconLinksComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
