import { Component } from '@angular/core';
import { SiblingComunicService } from './services/sibling-comunic.service';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'store';
  //aaa = true;
  facebook = faFacebookF;
  github = faGithub;
  email = faEnvelope;
  constructor(public sibCom: SiblingComunicService) {
  }
}
