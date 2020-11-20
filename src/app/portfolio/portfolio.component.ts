import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  modalShow = false;
  modalSrc: string;
  modalCaption: string;
  modalTitle: string;

  nbItems = 4;

  portfolio = [
    {
      id: 0,
      title: 'FRANCE',
      src: 'logo-france',
      alt: 'EDF'
    },
    {
      id: 1,
      title: 'ESPAGNE',
      src: 'logo-espagne',
      alt: ''
    },
    {
      id: 2,
      title: 'ITALIE',
      src: 'logo-italia',
      alt: 'Squadra Azurra'
    },
    {
      id: 3,
      title: 'BELGIQUE',
      src: 'logo-belgique',
      alt: 'Le seum incarné'
    },
    {
      id: 4,
      title: 'BRESIL',
      src: 'bresil',
      alt: ''
    },
    {
      id: 5,
      title: 'Argentine',
      src: 'logo-argentine',
      alt: ''
    },
    {
      id: 6,
      title: 'Allemagne',
      src: 'logo-allemagne',
      alt: ''
    },
    {
      id: 7,
      title: 'Angleterre',
      src: 'logo-angleterre',
      alt: ''
    },
    {
      id: 8,
      title: 'Mexique',
      src: 'logo-mexique',
      alt: ''
    },
    { id: 9,
      title: 'Croatie',
      src: 'logo-croatie',
      alt: ''
    }
  ];

  arrayCols = [];

  ngOnInit(): void {

    for (let i = 0; i < this.portfolio.length; i += this.nbItems){
      this.arrayCols.push( this.portfolio.slice(i, i + this.nbItems) );
    }
    console.log( this.arrayCols );
  }

  toggleModal(id = 0): void{
    this.modalShow = !this.modalShow;
    this.modalSrc = this.portfolio[id].src;
    this.modalTitle = this.portfolio[id].title;
    this.modalCaption = this.portfolio[id].alt;
  }

}
