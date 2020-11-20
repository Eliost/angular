import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-infos',
  templateUrl: './page-infos.component.html',
  styleUrls: ['./page-infos.component.css']
})
export class PageInfosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout():void{
    localStorage.removeItem('isConnected');
    this.router.navigateByUrl('');
  }
}
