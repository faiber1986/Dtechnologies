import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.css']
})
export class AgendaListComponent implements OnInit {

  tasks: any;
  currentTask = null;
  currentIndex = -1;
  name = '';

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.readTasks();
  }

  readTasks(): void {
    this.agendaService.readAll()
      .subscribe(
        tasks => {
          this.tasks = tasks;
          console.log(tasks);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readTasks();
    this.currentTask = null;
    this.currentIndex = -1;
  }

  setCurrentTask(task, index): void {
    this.currentTask = task;
    this.currentIndex = index;
  }

  deleteAllTasks(): void {
    this.agendaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readTasks();
        },
        error => {
          console.log(error);
        });
  }

  searchByName(): void {
    this.agendaService.searchByName(this.name)
      .subscribe(
        tasks => {
          this.tasks = tasks;
          console.log(tasks);
        },
        error => {
          console.log(error);
        });
  }
}

