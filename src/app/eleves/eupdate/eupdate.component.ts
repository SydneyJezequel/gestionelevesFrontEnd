import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EleveService} from "../../_services/eleveservice.service";
import {EleveAdd} from "../../model/EleveAdd";
import {EleveGet} from "../../model/EleveGet";
import {ActivatedRoute} from "@angular/router";

class Eleve {
}

@Component({
  selector: 'app-eupdate',
  templateUrl: './eupdate.component.html',
  styleUrls: ['./eupdate.component.scss']
})
export class EupdateComponent implements OnInit {


  // Attributs :
  eleve = new EleveGet();


  // Constructeur :
  constructor(private route:ActivatedRoute, private eleveService:EleveService) {}


  // Récupération de l'élève :
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    let idNumber = id as unknown as number;
    this.eleveService.getEleve(idNumber).subscribe(
      (response:any) =>
      {
        this.eleve = response;
        console.log(this.eleve); // DEBUG 2
      })
  }


  // Méthodes :
  updateEleve(eleve: EleveGet)
  {
    this.eleveService.updateEleve(eleve).subscribe(
      (reponse)=>
      {
        console.log(eleve);
        this.eleve = new EleveGet();  // DEBUG 3
        //window.location.assign("http://localhost:4200/classe/all");
      }
    )
  }


}
