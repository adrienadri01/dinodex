import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Classification } from 'src/app/shared/models/classification';
import { ClassificationService } from '../../services/classification.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classification-add-form',
  templateUrl: './classification-add-form.component.html',
  styleUrls: ['./classification-add-form.component.scss']
})
export class ClassificationAddFormComponent implements OnInit {

  ClassificationForm = this.fb.group({
    FormNom: ['', Validators.required],
    FormRegime: ['', Validators.required],
    FormMilieu: ['', Validators.required],
    FormImage: ['', Validators.required]
  });

  classification$: Observable <Classification>;
  classification: Classification;

  constructor(private classificationService: ClassificationService, private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.ClassificationForm.valid) {
      const classi = new Classification();
      classi.nom = this.ClassificationForm.value.FormNom;
      classi.regime = this.ClassificationForm.value.FormRegime;
      classi.milieu = this.ClassificationForm.value.FormMilieu;
      classi.image = this.ClassificationForm.value.FormImage;

      this.classification$ = this.classificationService.post(classi);

      this.classification$.subscribe({
        next: result => {
          this.classification = result;
        },
        error: err => console.log(err),
        complete: () => console.log('Récupération effectuée !')
      });
    }
    this.router.navigate(['/']);
  }

}
