import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {

  projects: any[] = [];

  constructor(private dataService: DataService) {
    this.projects = this.dataService.getProjects();
  }

  ngOnInit() {
    console.log(this.projects);
  }

}
