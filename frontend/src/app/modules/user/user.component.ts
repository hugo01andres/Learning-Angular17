import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation: string = '';
  @Output() occupationChange : EventEmitter<string> = new EventEmitter<string>();
  username: string = 'John Doe';
  
  constructor() { }

  ngOnInit(): void {
  }

  emitToParent() {
    this.occupationChange.emit('Abogado');
  }

}
