import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
declare interface MemberData {
  name: string,
  image: string
  biography: string,
  titles: string[]
}

@Component({
  selector: 'app-miembro-dialog',
  templateUrl: './miembro-dialog.component.html',
  styleUrls: ['./miembro-dialog.component.scss']
})
export class MiembroDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MiembroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MemberData) { }

  ngOnInit() {
  }

  get background() {
    return {'background-image': `url(../${this.data.image})`}
  }

}
