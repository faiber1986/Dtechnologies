import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-agenda-create',
  templateUrl: './agenda-create.component.html',
  styleUrls: ['./agenda-create.component.css']
})
export class AgendaCreateComponent implements OnInit {
  task = {
    name: '',
    description: '',
    available: false
  };
  submitted = false;

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
  }

  createTask(): void {
    const data = {
      name: this.task.name,
      description: this.task.description
    };

    this.agendaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTask(): void {
    this.submitted = false;
    this.task = {
      name: '',
      description: '',
      available: false
    };
  }

}

