
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  modal = false;
  ButtonCommand = false;
  modalMaillotId: any;
  modalMaillotSrc: string;
  modalMaillotTitle: string;
  modalMaillotPrice: string;
  params:any;
  nbItems = 4;

  constructor(public cartService: CartService) { }

  shop = [
  {
    id: 0,
    title: 'Juventus Troisième Maillot 2019/20 Enfant',
    src: 'maillot-bayern',
    price: '80 €'
  },
  {
    id: 1,
    title: "Real Madrid Maillot d'Entraînement HumanRace x Pharrell 2020 ÉDITION LIMITÉE",
    src: 'maillot-real',
    price: '80 €'
  },
  {
    id: 2,
    title: "Bayern Maillot Domicile 2020/21",
    src: 'maillot-bayern',
    price: '80 €'
  },
  {
    id: 3,
    title: "Paris Maillot Domicile 2020/21",
    src: 'maillot-paris',
    price: '80 €'
  },
  {
    id: 4,
    title: 'Liverpool Maillot Domicile 2020/21',
    src: 'maillot-liverpool',
    price: '80 €'
  },
  {
    id: 5,
    title: 'Boca Juniors Maillot Domicile 2020/21',
    src: 'maillot-boca',
    price: '80 €'
  },
  {
    id: 6,
    title: 'Juve Maillot Extérieur 2020/21',
    src: 'maillot-juve2',
    price: '80 €'
  },
  {
    id: 7,
    title: 'Juve Maillot 2 Extérieur 2020/21',
    src: 'maillot-juve3',
    price: '80 €'
  }
  ];
  array = [];
  ngOnInit(): void {
    
    for (let i = 0; i < this.shop.length; i += this.nbItems){
      this.array.push( this.shop.slice(i, i + this.nbItems) );
    }
    //console.log( this.array );
  }
  onModalMaillot(id=0):void{
    this.modal = !this.modal;
    this.modalMaillotId = this.shop[id];
    this.modalMaillotSrc = this.shop[id].src;
    this.modalMaillotTitle = this.shop[id].title;
    this.modalMaillotPrice = this.shop[id].price;
    this.params = [{src:this.modalMaillotSrc, title:this.modalMaillotTitle, price: this.modalMaillotPrice}];
    this.cartService.onModalMaillot(this.params);

  }
  onButtonCard():void{
    this.cartService.onButtonCard();
  /*  this.ButtonCommand = true;
    this.router.navigateByUrl('cart');*/
  }
}
