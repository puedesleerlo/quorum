import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { LineasDialogComponent } from './lineas-dialog/lineas-dialog.component';
import { lines } from './lineas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [
    {
      path: "../../../assets/slider/gobierno.jpg",
      label: "Gobierno"
    },
    {
      path: "../../../assets/slider/comunicacion.jpg",
      label: "Comunicación"
    },
    {
      path: "../../../assets/slider/estrategia.jpg",
      label: "Estrategia"
    }
  ]
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/350?random&t=${Math.random()}`);
  works = lines;
  aliados = [
    "../../../assets/logos/corantioquia.jpg",
    "../../../assets/logos/corpouraba.png",
    "../../../assets/logos/helpplanet.jpg"]

  constructor(config: NgbCarouselConfig, public dialog: MatDialog) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  openDialog(line): void {
    const dialogRef = this.dialog.open(LineasDialogComponent, {
      width: '80%',
      height: '500px',
      data: line
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    }); }
}
