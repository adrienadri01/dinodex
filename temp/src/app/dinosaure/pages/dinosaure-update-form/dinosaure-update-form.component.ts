import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Dinosaure } from 'src/app/shared/models/dinosaure';
import { DinosaureService } from '../../services/dinosaure.service';

@Component({
  selector: 'app-dinosaure-update-form',
  templateUrl: './dinosaure-update-form.component.html',
  styleUrls: ['./dinosaure-update-form.component.scss']
})
export class DinosaureUpdateFormComponent implements OnInit {

  dinosaure$: Observable <Dinosaure>;
  dinosaure: Dinosaure;
  DinosaureForm;
  dino: string;

  constructor(private dinosaureService: DinosaureService, private fb: FormBuilder,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.dino = params.get('dinosaureId');
    });

    this.dinosaure$ = this.dinosaureService.getDinosaure(this.dino);

    this.dinosaure$.subscribe({
      next: result => {
        this.dinosaure = result;

        this.DinosaureForm = this.fb.group({
          FormEspece: [this.dinosaure[0].espece, Validators.required],
          FormTaille: [this.dinosaure[0].taille, Validators.required],
          FormPoids: [this.dinosaure[0].poids, Validators.required],
          FormPeriode: [this.dinosaure[0].periode, Validators.required],
          FormEnnemi: [this.dinosaure[0].ennemi, Validators.required],
          FormImage: [this.dinosaure[0].image, Validators.required]
        });
      },
      error: err => console.log(err),
      complete: () => console.log('Récupération effectuée !')
    });
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
      dino.classificationId = this.dinosaure[0].classificationId;


      this.dinosaure$ = this.dinosaureService.put(this.dino, dino);

      this.dinosaure$.subscribe({
        next: result => {
          this.dinosaure = result;
        },
        error: err => console.log(err),
        complete: () => console.log('Récupération effectuée !')
      });
    }
    this.router.navigate(['/classifications', this.dinosaure[0].classificationId]);
  }

}
