import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NewTask } from './new-task.model';
import { TasksService } from '../task/service/tasks.service';



@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) id!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  constructor(private tasksService: TasksService) { }


  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.AddTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.id);
    this.close.emit();
  }
}
