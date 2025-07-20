import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private projects = [
    {
      id: 1,
      name: 'Portfolio Site',
      description: 'Personal Website to showcase my work',
      techStack: 'HTML, CSS'
    },
    {
      id: 2,
      name: 'Todo App',
      description: 'Simple task management app',
      techStack: 'Python, FastApi, Sqlite, Pytest, HTML, CSS, JS'
    }
  ];

  constructor() {}

  getProjects() {
    return this.projects;
  }
} 