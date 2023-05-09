import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    private reg: AngularSvgIconModule , 
    private domSanitizer: DomSanitizer){
      // this.reg.addSvgIcon(
      //   'test',
      //   this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/test.svg')
      // )

  }
}
