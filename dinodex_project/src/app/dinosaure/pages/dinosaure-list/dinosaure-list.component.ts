import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import { DinosaureService } from '../../services/dinosaure.service';
import { Dinosaure } from 'src/app/shared/models/dinosaure';
import { MatDialog } from '@angular/material/dialog';
import { DinosaureDialogComponent } from '../dinosaure-dialog/dinosaure-dialog.component';

@Component({
  selector: 'app-dinosaure-list',
  templateUrl: './dinosaure-list.component.html',
  styleUrls: ['./dinosaure-list.component.scss']
})

export class DinosaureListComponent implements OnInit, OnDestroy {

  dinosaure$: Observable <Dinosaure>;
  dinosaure: Dinosaure;
  dinosaureGet$: Observable <Dinosaure>;
  dinosaureGet: Dinosaure;
  dinosaures$: Observable <Dinosaure[]>;
  dinosaures: Dinosaure[];
  navigationSubscription;
  classification: string;

  constructor(private route: ActivatedRoute, private dinosaureService: DinosaureService, private router: Router,
              public dialog: MatDialog) {

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseDinosaures();
      }
    });
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
    this.classification = params.get('classificationId');
    });

    this.dinosaures$ = this.dinosaureService.get(this.classification);

    this.dinosaures$.subscribe({
      next: result => {
        this.dinosaures = result;
      },
      error: err => console.log(err),
      complete: () => console.log('Récupération effectuée !')
    });
  }

  initialiseDinosaures() {

    this.route.paramMap.subscribe(params => {
      this.classification = params.get('classificationId');
    });

    this.dinosaures$ = this.dinosaureService.get(this.classification);

    this.dinosaures$.subscribe({
      next: result => {
        this.dinosaures = result;
      },
      error: err => console.log(err),
      complete: () => console.log('Récupération effectuée !')
    });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
  }

  delete(dinosaureId: string) {

    if (confirm('Êtes-vous sûr de vouloir supprimer cette créature ?')) {

      this.dinosaure$ = this.dinosaureService.delete(dinosaureId);

      this.dinosaure$.subscribe({
        next: result => {
          this.dinosaure = result;
        },
        error: err => console.log(err),
        complete: () => console.log('Suppression effectuée !')
      });

      this.router.navigate(['/classifications', this.classification]);
    }
  }

  openDialog(dinosaureId: string) {

    this.dinosaureGet$ = this.dinosaureService.getDinosaure(dinosaureId);

    this.dinosaureGet$.subscribe({
      next: result => {
        this.dinosaureGet = result;

        this.dialog.open(DinosaureDialogComponent, {
          width: '400px',
          height: '500px',
          // tslint:disable-next-line: max-line-length
          data: {espece: this.dinosaureGet[0].espece, taille: this.dinosaureGet[0].taille, poids: this.dinosaureGet[0].poids, periode: this.dinosaureGet[0].periode, ennemi: this.dinosaureGet[0].ennemi, image: this.dinosaureGet[0].image}
        });
      },
      error: err => console.log(err),
      complete: () => console.log('Récupération effectuée !')
    });

    
  }

}
