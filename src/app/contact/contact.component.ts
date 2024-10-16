import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service'; // Adjust path based on your file structure

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private contactService: ContactService) { }

  onSubmit(contactForm: any): void {
    const contactData = contactForm.value;

    this.contactService.submitContactForm(contactData).subscribe(
      response => {
        console.log('Contact form submitted successfully!', response);
      },
      error => {
        console.error('Error submitting contact form:', error);
      }
    );
  }
}
