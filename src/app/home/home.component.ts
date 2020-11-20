import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  team = [
    {icon: 'paul-pogba',
    firstname: 'Paul',
    lastname: 'Pogba',
    status: 'Manchester United'
    },
    {icon: 'kante',
    firstname: "N'golo",
    lastname: 'kante',
    status: 'Chelsea FC'
    },
    {icon: 'antoine-griezmann',
    firstname: 'Antoine',
    lastname: 'Griezmann',
    status: 'FC Barcelone'
    },
    {
    icon: 'cr7',
    firstname: 'Cristiano',
    lastname: 'Ronaldo',
    status: 'Real Madrid'
    },
    {
      icon: 'mbappe',
      firstname: 'Kylian',
      lastname: 'Mbappé',
      status: 'President des français'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
