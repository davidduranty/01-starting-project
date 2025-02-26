import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { User } from './user.model';





@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();
  // select = output<string>()

  // avatar = input.required<string>()
  // name = input.required<string>()

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }
  // get selectedUser() {
  //   return 'assets/users/' + this.name
  // }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
