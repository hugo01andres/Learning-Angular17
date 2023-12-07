import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  favouriteFramework: string = '';
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  sendForm() {
    console.log('Form sent!', this.favouriteFramework);
  }
  sendForm2() {
    console.log('Form sent!', this.profileForm.value);
    
  }
}
