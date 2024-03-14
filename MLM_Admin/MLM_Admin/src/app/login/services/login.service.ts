import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "https://localhost:7200/api/authentication/login";
  options = {
    headers : new HttpHeaders(
    {
      'content-type' : "application/json"
    }
    )
  }

  constructor(private http : HttpClient, private router : Router) { }

  login(username : string, password : string){
    const body = JSON.stringify({
      userName : username,
      password : password
    })

 
    this.http.post(this.baseUrl, body, this.options).subscribe(
      {
        next : (response : any) => {
          //console.log(response);
          //Récupérer le token renvoyé par l'API serveur
          const authToken = (<any>response).token;
          const userId = (<any>response).id;

          //Enregistrer le token dans localstorage
          localStorage.setItem("token", authToken);
          localStorage.setItem("userId", userId);

          //une fois que l'utilisateur est connecté, je le redirige vers le tableau de bord
          this.router.navigate(["/"]);
        },
        error : error => {
          if(error.status == 401)
            {
            alert("Identifiant ou mot de passe invalide")
            this.router.navigate(["/login"]);}
          console.log(error)
        },
        complete : ()=> console.log("Complete")
      }
    )
  }


  isAuthenticated() : boolean{
    if(localStorage.getItem("token") == undefined)
      return false
    //Il recommandé d'ajouter une requête vers le serveur afin de vérifier la validité du token
    return true
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login'])
  }

}
