import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  modalShow = false;
  prenom:string;
  nom:string;
  age:number;
  email:any;
  message:string;

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
  onShowModal(values:any):void{
    this.modalShow = !this.modalShow;
    this.prenom = values.prenom;
    this.nom = values.nom;
    this.email = values.email;
    this.age = values.age;
    this.message = values.message;
  }
}
