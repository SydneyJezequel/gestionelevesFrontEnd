import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EleveAdd} from "../model/EleveAdd";
import {EleveGet} from "../model/EleveGet";
import {Eleve} from "../model/Eleve";

@Injectable({
  providedIn: 'root'
})
export class EleveService {



  // Attributs :
  private all:string="api/eleve/all";
  private update:string="api/eleve/update";
  private delete:string="api/eleve/delete/";
  private add:string="api/eleve/add";
  private find:string = "api/eleve/"


  // Contructeur
  constructor(private http:HttpClient) { }


  // Méthodes :
  public getEleves():Observable<EleveGet[]>
  {
    return this.http.get<EleveGet[]>(this.all);
  }

  public getEleve(id: number):Observable<EleveGet>
  {
    console.log(this.find);
    return this.http.get<EleveGet>(this.find + id);
  }

  public addEleve(eleve: EleveAdd):Observable<EleveAdd>
  {
    return this.http.post<EleveAdd>(this.add, eleve);
  }

  public updateEleve(eleve: EleveGet):Observable<EleveGet>
  {
    return this.http.put<EleveGet>(this.update, eleve);
  }

  public deleteEleve(id: number):Observable<void>
  {
    return this.http.delete<void>( this.delete + id);
  }





}
