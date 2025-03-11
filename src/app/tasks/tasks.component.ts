import { Component, Input, NgModuleRef, output } from '@angular/core';
import { TasksService } from './task/service/tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  isAddingTask: boolean = false;
  constructor(private tasksService: TasksService) { }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id)
  }

  onStartAddTask() {
    this.isAddingTask = true;

  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
