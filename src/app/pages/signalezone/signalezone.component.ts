import { Component, Inject, OnInit } from '@angular/core';
import {EvenementModel} from "../../modele/utilisateurs.model";
import {getDeepFromObject, NB_AUTH_OPTIONS, NbAuthResult, NbAuthService} from "@nebular/auth";
import { NgModule } from '@angular/core';

import {Router} from "@angular/router";
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'ngx-signalezone',
  templateUrl: './signalezone.component.html',
  styleUrls: ['./signalezone.component.scss']
})

export class SignalezoneComponent implements OnInit {

  evenement: EvenementModel = {
    description: '',
    lieu: '',
    images: '',
    date:''
  };

  constructor(protected service: AuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected router: Router) { }


  signalez(): void {
    this.service.signalez(this.evenement).subscribe(resp=> {
      console.log(resp)
       this.router.navigate(['/pages/evenement']);
     }, (errors) => {
       console.log(errors)
     })

  }

  saveToken(jwt: string,
    name: string,
    profilId: number,
    iduser: number
) {
localStorage.setItem('token', jwt);
localStorage.setItem('name', name);
localStorage.setItem('id', String(iduser));
localStorage.setItem('profil', String(profilId));
}

  ngOnInit(): void {
  }

}
