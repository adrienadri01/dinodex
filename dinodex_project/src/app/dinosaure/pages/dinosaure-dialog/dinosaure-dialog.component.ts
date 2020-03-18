import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  espece: string;
  taille: number;
  poids: number;
  periode: string;
  ennemi: string;
  image: string;
}

@Component({
  selector: 'app-dinosaure-dialog',
  templateUrl: './dinosaure-dialog.component.html',
  styleUrls: ['./dinosaure-dialog.component.scss']
})

export class DinosaureDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DinosaureDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
