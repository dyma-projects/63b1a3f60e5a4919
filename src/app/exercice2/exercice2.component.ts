import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pointer = "pointer"
  exercice2() {
    console.log("Click");
  }

}
