import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DinosaureService } from '../../services/dinosaure.service';
import { Dinosaure } from 'src/app/shared/models/dinosaure';

@Component({
  selector: 'app-dinosaure-tab',
  templateUrl: './dinosaure-tab.component.html',
  styleUrls: ['./dinosaure-tab.component.scss']
})
export class DinosaureTabComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'espece', 'taille', 'poids', 'periode', 'ennemi', 'image', 'supprimer', 'modifier'];
  dinosaure$: Observable <Dinosaure>;
  dinosaure: Dinosaure;
  dinosaures$: Observable <Dinosaure[]>;
  dinosaures: Dinosaure[];
  classification: string;
  navigationSubscription;

  constructor(private route: ActivatedRoute, private dinosaureService: DinosaureService, private router: Router) {

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseTableau();
      }
    });
  }

  ngOnInit(): void {

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

  initialiseTableau() {

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

      this.router.navigate(['/dinosaure-tab', this.classification]);
    }
  }

}
