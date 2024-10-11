import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from "./dasboard/dashboard.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule,
    DashboardComponent, RouterLink, RouterLinkActive, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-practice';
  msg: string = 'Passing from parent!!'
  receivedmsg: string = '';
  textMsg: string = '';
  constructor() {
    console.log('Inside Parent Constructor...');
  }
  recivedDataFromChild(msg: string) {
    this.receivedmsg = msg;
  }
}
