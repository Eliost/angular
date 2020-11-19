import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form = new FormGroup({
    prenom: new FormControl('',Validators.required),
    nom: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    message: new FormControl('')

  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(values:any):void{
    console.log(values);
  }
}
