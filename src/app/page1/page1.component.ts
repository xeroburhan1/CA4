import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {


  onsubmit(frm: NgForm) {
    alert("submitted successfully")
    console.log(frm.value);
  }

  reason=[
    {name:"home"},
    {name:"car"},
    {name:"other"},
  ]

  ngOnInit(): void {
  }

}
