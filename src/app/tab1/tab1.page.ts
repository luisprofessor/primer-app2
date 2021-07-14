import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit() {
    let num=23;
    //debugger;
    num=num+2;

    console.log(num);
    
  }

}
