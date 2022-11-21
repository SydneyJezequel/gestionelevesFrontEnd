import {Eleve} from "./Eleve";

export class EleveAdd implements Eleve {


  // Attributs :
  nom!:string;
  prenom!:string;
  email!:string;


  // Constructeur :
  constructor(nom: string, prenom: string, email: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
  }






}
