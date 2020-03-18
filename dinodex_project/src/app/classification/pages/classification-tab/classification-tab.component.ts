import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Classification } from 'src/app/shared/models/classification';
import { ClassificationService } from '../../services/classification.service';

@Component({
  selector: 'app-classification-tab',
  templateUrl: './classification-tab.component.html',
  styleUrls: ['./classification-tab.component.scss']
})
export class ClassificationTabComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'nom', 'regime', 'milieu', 'image', 'supprimer', 'modifier'];
  classification$: Observable <Classification>;
  classification: Classification;
  classifications$: Observable <Classification[]>;
  classifications: Classification[];
  navigationSubscription;

  constructor(private route: ActivatedRoute, private classificationService: ClassificationService, private router: Router) {

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseTableau();
      }
    });
  }

  ngOnInit(): void {
    this.classifications$ = this.classificationService.get();

    this.classifications$.subscribe({
      next: result => {
        this.classifications = result;
        console.log(result);
      },
      error: err => console.log(err),
      complete: () => console.log('Récupération effectuée !')
    });
  }

  initialiseTableau() {
    this.classifications$ = this.classificationService.get();

    this.classifications$.subscribe({
      next: result => {
        this.classifications = result;
        console.log(result);
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

  delete(classificationId: string) {

    if (confirm('Êtes-vous sûr de vouloir supprimer la classification ?')) {

      this.classification$ = this.classificationService.delete(classificationId);

      this.classification$.subscribe({
        next: result => {
          this.classification = result;
        },
        error: err => console.log(err),
        complete: () => console.log('Suppression effectuée !')
      });

      this.router.navigate(['/classification-tab']);
    }
  }

}
