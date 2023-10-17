import { Component,OnInit } from '@angular/core';

import { AlertService } from './alert.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  message: any;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, 3000); 
    });
  }
}
