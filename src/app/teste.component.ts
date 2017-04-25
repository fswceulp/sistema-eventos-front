import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
@Component({
    templateUrl: 'teste.component.html',
    styleUrls: ['../assets/css/style.css'], 
})
export class TesteComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  lat: number = -14.1221232;
  lng: number = -52.3152159;
  MsZoomToOptions: number = 5;
    constructor() {
     }
    ngOnInit() { }
}