import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  links = [
    {
      path: "./",
      label: "Inicio"
    },
    {
      path: "./nosotros",
      label: "Nosotros"
    },
    // {
    //   path: "./lineas",
    //   label: "Líneas estatégicas"
    // },
    {
      path: "./contacto",
      label: "Contacto"
    },
    {
      path: "./blog",
      label: "Blog"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
