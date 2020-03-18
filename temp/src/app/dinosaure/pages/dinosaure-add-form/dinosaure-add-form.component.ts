import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Dinosaure } from 'src/app/shared/models/dinosaure';
import { DinosaureService } from '../../services/dinosaure.service';

@Component({
  selector: 'app-dinosaure-add-form',
  templateUrl: './dinosaure-add-form.component.html',
  styleUrls: ['./dinosaure-add-form.component.scss']
})
export class DinosaureAddFormComponent implements OnInit {

  DinosaureForm = this.fb.group({
    FormEspece: ['', Validators.required],
    FormTaille: ['', Validators.required],
    FormPoids: ['', Validators.required],
    FormPeriode: ['', Validators.required],
    FormEnnemi: ['', Validators.required],
    FormImage: ['', Validators.required]
  });

  dinosaure$: Observable <Dinosaure>;
  dinosaure: Dinosaure;
  classification: string;
  classificationId: number;


  constructor(private dinosaureService: DinosaureService, private fb: FormBuilder,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.classification = params.get('classificationId');
    });
    this.classificationId = +this.classification;
  }

  onSubmit() {
    if (this.DinosaureForm.valid) {
      const dino = new Dinosaure();
      dino.espece = this.DinosaureForm.value.FormEspece;
      dino.taille = this.DinosaureForm.value.FormTaille;
      dino.poids = this.DinosaureForm.value.FormPoids;
      dino.periode = this.DinosaureForm.value.FormPeriode;
      dino.ennemi = this.DinosaureForm.value.FormEnnemi;
      dino.image = this.DinosaureForm.value.FormImage;
      dino.classificationId = this.classificationId;

      this.dinosaure$ = this.dinosaureService.post(dino);

      this.dinosaure$.subscribe({
        next: result => {
          this.dinosaure = result;
        },
        error: err => console.log(err),
        complete: () => console.log('Récupération effectuée !')
      });
    }
    this.router.navigate(['/classifications', this.classificationId]);
  }

}
