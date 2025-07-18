import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Project } from './project/project';
import { AboutMe } from './home/about-me/about-me';
import { ContactMe } from './home/contact-me/contact-me';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'project', component: Project},
    {path: 'about-me', component: AboutMe },
    {path: 'contact-me', component: ContactMe },
];
