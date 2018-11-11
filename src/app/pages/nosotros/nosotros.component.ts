import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiembroDialogComponent } from './miembro-dialog/miembro-dialog.component';
import {equipo} from "./equipo"
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  name = "Brayan García"
  profesiones= ["abogado", "historiador"]
  biografia = "cosas, cosas"
  image = "../../../assets/nosotros.jpg";
  members = equipo
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(member): void {
    const dialogRef = this.dialog.open(MiembroDialogComponent, {
      width: '80%',
      height: '600px',
      data: {name: member.nombre,
         titles: member.titles, 
         biography: member.biography,
         image: member.big
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
