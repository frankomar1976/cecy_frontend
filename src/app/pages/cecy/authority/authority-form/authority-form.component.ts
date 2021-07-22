import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authority-form',
  templateUrl: './authority-form.component.html',
  styleUrls: ['./authority-form.component.css']
})
export class AuthorityFormComponent implements OnInit {

  constructor() 
  { }

  ngOnInit(): void {
    this.saludo = "Hola";

  }

  saludo: String;
}
