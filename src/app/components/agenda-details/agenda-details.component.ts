import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/services/agenda.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agenda-details',
  templateUrl: './agenda-details.component.html',
  styleUrls: ['./agenda-details.component.css']
})
export class AgendaDetailsComponent implements OnInit {
  currentTask = null;
  message = '';

  constructor(
    private agendaService: AgendaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTask(this.route.snapshot.paramMap.get('id'));
  }

  getTask(id): void {
    this.agendaService.read(id)
      .subscribe(
        task => {
          this.currentTask = task;
          console.log(task);
        },
        error => {
          console.log(error);
        });
  }

  setAvailableStatus(status): void {
    const data = {
      name: this.currentTask.name,
      description: this.currentTask.description,
      available: status
    };

    this.agendaService.update(this.currentTask.id, data)
      .subscribe(
        response => {
          this.currentTask.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTask(): void {
    this.agendaService.update(this.currentTask.id, this.currentTask)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Task was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTask(): void {
    this.agendaService.delete(this.currentTask.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/task']);
        },
        error => {
          console.log(error);
        });
  }
}

