import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { ClassificationService } from '../../services/classification.service';
import { Classification } from 'src/app/shared/models/classification';

@Component({
  selector: 'app-classification-list',
  templateUrl: './classification-list.component.html',
  styleUrls: ['./classification-list.component.scss']
})
export class ClassificationListComponent implements OnInit, OnDestroy {

  classification$: Observable <Classification>;
  classification: Classification;
  classifications$: Observable <Classification[]>;
  classifications: Classification[];
  navigationSubscription;


  constructor(private classificationService: ClassificationService, private router: Router) {

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseClassifications();
      }
    });
  }

  ngOnInit() {
    this.classifications$ = this.classificationService.get();

    this.classifications$.subscribe({
      next: result => {
        this.classifications = result;
      },
      error: err => console.log(err),
      complete: () => console.log('Récupération effectuée !')
    });
  }

  initialiseClassifications() {
    this.classifications$ = this.classificationService.get();

    this.classifications$.subscribe({
      next: result => {
        this.classifications = result;
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

      this.router.navigate(['/classifications']);
    }
  }

}
