import { Component } from '@angular/core';
import { AboutMe } from './about-me/about-me';
import { Projects } from './projects/projects';
import { Video } from "./video/video";
import { ContactMe } from './contact-me/contact-me';

@Component({
  selector: 'app-home',
  imports: [AboutMe, Projects, Video, ContactMe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
