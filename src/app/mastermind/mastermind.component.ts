import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.scss']
})
export class MastermindComponent implements OnInit {

  compteurCouleurs: number = 0;
  //bleu: string;

  constructor() { }

  ngOnInit(): void {
  }

  

  set(): void {
    console.log("vous avez cliqué sur set");
  }

  reset() : void {
    console.log("vous avez cliqué sur reset");

  }

}
