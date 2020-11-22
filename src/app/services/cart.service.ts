import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  tab:any;
  params:any;
  ButtonCommand = false;
  blocMaillot:any;
  title:string;
  src:string;
  price:string;

  constructor(public router:Router) { }
  
    ngOnInit(): void {
  
    }
    onModalMaillot(params):void{
      this.tab = params;
      this.blocMaillot = params[0];
      this.title = this.blocMaillot['title'];
      this.src = this.blocMaillot['src'];
      this.price = this.blocMaillot['price'];

      return this.blocMaillot;
    }
    onButtonCard():void{
      this.ButtonCommand = true;
      this.router.navigateByUrl('cart');
    }

}
