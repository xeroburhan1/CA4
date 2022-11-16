import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  onsubmit(frm: NgForm) {
    console.log(frm.value);
    console.log(frm.valid);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
