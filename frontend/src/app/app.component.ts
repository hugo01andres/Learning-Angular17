import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './modules/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  city : string = 'San Francisco'
  doesUserexist : boolean = true;
  operatingystems = [{id: 1, name: 'Windows'}, {id: 2, name: 'MacOS'}, {id: 3, name: 'Linux'}];
  names = ['John', 'Jane', 'Jack', 'Jill'];

  message = '';

  onMouseOver() {
    this.message = 'Hello: ';
  }
  onMouseLeave(){
    this.message = '';
  }

  isEditable : boolean = true;
}
