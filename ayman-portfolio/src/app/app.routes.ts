import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'education', 
    loadComponent: () => import('./education/education.component').then(m => m.EducationComponent) 
  },
  { 
    path: 'skills', 
    loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent) 
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) 
  },
];
