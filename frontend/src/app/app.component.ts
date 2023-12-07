import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './modules/user/user.component';
import { OperatingSystems } from './interfaces/operating-systems';
import { CommentsComponent } from './modules/comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,UserComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  city : string = 'San Francisco'
  doesUserexist : boolean = true;
  operatingystems: OperatingSystems[] = [{id: 1, name: 'Windows'}, {id: 2, name: 'MacOS'}, {id: 3, name: 'Linux'}];
  names = ['John', 'Jane', 'Jack', 'Jill'];
  occupation : string = 'Software Engineer';
  message = '';

  onMouseOver() {
    this.message = 'Hello: ';
  }
  onMouseLeave(){
    this.message = '';
  }
  receiveEmission($event : any) {
    this.occupation ='Y ahora soy' + $event;
  }

  isEditable : boolean = true;
}
