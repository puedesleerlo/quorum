import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface LineaData {
  info: string
  name: string
  color: string,
  logo: string,
  label: string,
  items: string[]
}

@Component({
  selector: 'app-lineas-dialog',
  templateUrl: './lineas-dialog.component.html',
  styleUrls: ['./lineas-dialog.component.scss']
})
export class LineasDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LineasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LineaData) { }

  ngOnInit() {
  }

}
