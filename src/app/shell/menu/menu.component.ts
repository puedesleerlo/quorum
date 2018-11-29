import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  links = [
    {
      path: "./inicio",
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
      path: "./diurno",
      label: "Diurno"
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      console.log(event);
      this.router.navigate(['./search/' + "ABC"])
    }
  }
}
