import { Component, Input, NgModuleRef, output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';
import { TasksService } from './task/service/tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
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
