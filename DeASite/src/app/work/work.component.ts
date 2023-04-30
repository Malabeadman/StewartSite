import { Component, OnInit } from '@angular/core';

//import {alertLoaded} from '/Users/deangelostewart/Desktop/MaHome/Projects/StewartSite/DeASite/src/assets/JS/Simple.js';

declare var alertLoaded: any;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  clickAlert(){
    alertLoaded(); 
  }


  constructor() {      }

  ngOnInit(): void {
  }

}
