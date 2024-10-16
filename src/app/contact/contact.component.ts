import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service'; // Adjust path based on your file structure

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submissionStatus: string = '';  // To display submission success or failure message
  isSubmitting: boolean = false;  // To show loading indicator when submitting

  constructor(private contactService: ContactService) { }

  onSubmit(contactForm: any): void {
    if (contactForm.valid) {
      this.isSubmitting = true;  // Show loading indicator
      const contactData = contactForm.value;

      this.contactService.submitContactForm(contactData).subscribe(
        response => {
          console.log('Contact form submitted successfully!', response);
          this.submissionStatus = 'Your message has been sent successfully!';
          contactForm.reset();  // Optionally reset form fields
          this.isSubmitting = false;  // Hide loading indicator
        },
        error => {
          console.error('Error submitting contact form:', error);
          this.submissionStatus = 'There was an error sending your message. Please try again later.';
          this.isSubmitting = false;  // Hide loading indicator
        }
      );
    } else {
      this.submissionStatus = 'Please fill in all required fields.';
    }
  }
}
