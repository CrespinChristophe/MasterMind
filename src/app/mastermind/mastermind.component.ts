import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.scss']
})
export class MastermindComponent implements OnInit {

  compteurCouleurs: number = 0;
  varBleu: string = "bleu";
  varRouge: string = "rouge";
  varVert: string = "vert";
  varJaune: string = "jaune";
  varRose: string = "rose";
  varNoir: string = "noir";
  varVertClair: string = "vert clair";
  couleurChoisie: string ="";
  //warning: string ="";
  isAvailable: boolean = false;



  
  constructor() { }

  

  ngOnInit(): void {

    /*if ( this.compteurCouleurs == 4) {

      console.log("le nombre de couleurs est égal à 4");
      
    } */

  }

  essais(): void {
    if ( this.compteurCouleurs == 4) {

      //this.warning="Le nombre de couleurs choisie est atteint !!!!";
      this.isAvailable = true;
      
    } 
  }

  bleu(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "bleu";
    this.essais();
  }

  rouge(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "rouge";
    this.essais();
  }

  vert(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "vert";
    this.essais();
  }

  jaune(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "jaune";
    this.essais();
  }

  rose(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "rose";
    this.essais();
  }

  noir(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "noir";
    this.essais();
  }

  vertclair(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "vert clair";
    this.essais();
  }

  set(): void {
    console.log("vous avez cliqué sur set");
  }

  reset() : void {
    console.log("vous avez cliqué sur reset");

  }

  

}
