import { Component, OnInit } from '@angular/core';
import {EleveService} from "../../_services/eleveservice.service";
import {EleveGet} from "../../model/EleveGet";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-eall',
  templateUrl: './eall.component.html',
  styleUrls: ['./eall.component.scss']
})
export class EallComponent implements OnInit {


  // Attributs :
  public eleves!:EleveGet[];


  // Constructeur :
  constructor(private eleveService:EleveService) { }


  ngOnInit(): void {
    this.getEleves();
  }

  // Méthodes :
  public getEleves():void
  {
    this.eleveService.getEleves().subscribe(
      (response: EleveGet[]) =>
      {
        this.eleves = response;
      },
      (error:HttpErrorResponse) =>
      {
        alert(error.message);
      }
    )
  }


  deleteEleve(id: number)
  {
    this.eleveService.deleteEleve(id).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      }
    )
  }



}
