import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Classification } from 'src/app/shared/models/classification';
import { ClassificationService } from '../../services/classification.service';

@Component({
  selector: 'app-classification-update-form',
  templateUrl: './classification-update-form.component.html',
  styleUrls: ['./classification-update-form.component.scss']
})
export class ClassificationUpdateFormComponent implements OnInit {

  classification$: Observable <Classification>;
  classification: Classification;
  ClassificationForm;
  classi: string;

  constructor(private classificationService: ClassificationService, private fb: FormBuilder,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.classi = params.get('classificationId');
    });

    this.classification$ = this.classificationService.getClassification(this.classi);

    this.classification$.subscribe({
      next: result => {
        this.classification = result;

        this.ClassificationForm = this.fb.group({
          FormNom: [this.classification[0].nom, Validators.required],
          FormRegime: [this.classification[0].regime, Validators.required],
          FormMilieu: [this.classification[0].milieu, Validators.required],
          FormImage: [this.classification[0].image, Validators.required]
        });
      },
      error: err => console.log(err),
      complete: () => console.log('Récupération effectuée !')
    });
  }

  onSubmit() {
    if (this.ClassificationForm.valid) {
      const classi = new Classification();
      classi.nom = this.ClassificationForm.value.FormNom;
      classi.regime = this.ClassificationForm.value.FormRegime;
      classi.milieu = this.ClassificationForm.value.FormMilieu;
      classi.image = this.ClassificationForm.value.FormImage;

      this.classification$ = this.classificationService.put(this.classi, classi);

      this.classification$.subscribe({
        next: result => {
          this.classification = result;
        },
        error: err => console.log(err),
        complete: () => console.log('Édition effectuée !')
      });
    }
    this.router.navigate(['/classifications']);
  }

}
