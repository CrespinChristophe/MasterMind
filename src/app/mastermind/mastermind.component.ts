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

  //Tous les booleans

  isAvailable: boolean = false;
  boolBleu: boolean = false;
  boolRouge: boolean = false;
  boolVert: boolean = false;
  boolJaune: boolean = false;
  boolRose: boolean = false;
  boolNoir: boolean = false;
  boolVertClair: boolean = false;
  boolContainer2: boolean = false;



  
  constructor() { }

  

  ngOnInit(): void {
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
    this.boolBleu = true;
    this.boolContainer2 = true;
    this.essais();
  }

  rouge(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "rouge";
    this.boolRouge = true;
    this.boolContainer2 = true;
    this.essais();
  }

  vert(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "vert";
    this.boolVert = true;
    this.boolContainer2 = true;
    this.essais();
  }

  jaune(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "jaune";
    this.boolJaune = true;
    this.boolContainer2 = true;
    this.essais();
  }

  rose(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "rose";
    this.boolRose = true;
    this.boolContainer2 = true;
    this.essais();
  }

  noir(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "noir";
    this.boolNoir = true;
    this.boolContainer2 = true;
    this.essais();
  }

  vertclair(): void {
    this.compteurCouleurs++;
    this.couleurChoisie = "vert clair";
    this.boolVertClair = true;
    this.boolContainer2 = true;
    this.essais();
  }

  set(): void {
    console.log("vous avez cliqué sur set");
  }

  reset() : void {

  this.isAvailable = false;
  this.boolBleu = false;
  this.boolRouge = false;
  this.boolVert = false;
  this.boolJaune = false;
  this.boolRose = false;
  this.boolNoir = false;
  this.boolVertClair = false;
  this.boolContainer2 = false;
  this.compteurCouleurs = 0;

  }

  

}
