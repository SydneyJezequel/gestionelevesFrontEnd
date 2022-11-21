import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EleveService} from "../../_services/eleveservice.service";
import {EleveAdd} from "../../model/EleveAdd";

@Component({
  selector: 'app-eadd',
  templateUrl: './eadd.component.html',
  styleUrls: ['./eadd.component.scss']
})
export class EaddComponent implements OnInit {

  // Attributs :
  createForm: FormGroup;


  // Constructeur :
  constructor(private eleveService:EleveService, private fb:FormBuilder) {
    this.createForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }


  // Méthodes :
  addEleve($event: MouseEvent)
  {
    $event.preventDefault();
    const eleve: EleveAdd = new EleveAdd(
      this.createForm.controls["nom"].value,
      this.createForm.controls["prenom"].value,
      this.createForm.controls["email"].value,
    );
    console.log(eleve);
    this.eleveService.addEleve(eleve).subscribe(
      (response) =>
      {
        console.log(response)
        window.location.assign("http://localhost:4200/professeur/all");
      }
    )
  }



}

