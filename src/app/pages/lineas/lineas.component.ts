import { Component, OnInit } from '@angular/core';
// import { LineasDialogComponent } from './lineas-dialog/lineas-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.scss']
})
export class LineasComponent implements OnInit {
  image = [1].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  members = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  videoUrl = "hola"
  info= "info"
  lineaName= "sefase"
  lineaColor = "hola"
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  // openDialog(member): void {
  //   const dialogRef = this.dialog.open(LineasDialogComponent, {
  //     width: '500px',
  //     height: '500px',
  //     data: {
  //       videoUrl: this.videoUrl,
  //       info: this.info,
  //       lineaName: this.lineaName,
  //       color: this.lineaColor
  //       }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
      
  //   }); }

}
