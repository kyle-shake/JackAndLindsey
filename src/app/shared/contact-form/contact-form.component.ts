import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ContactService: ContactService
  ) { }

  ngOnInit(): void {
    this.createContactFormGroup();
  }

  createContactFormGroup(){
    this.contactForm = this.fb.group({
      "firstName": ['', Validators.required],
      "lastName": ['', Validators.required],
      "business": [''],
      "location": [''],
      "email": ['', [Validators.required, Validators.email]],
      "phoneNo": ['', Validators.required],
      "preferredMethod": ['', Validators.required],
      "timeOfDay": [''],
      "bookingDate": ['']
    })
  }

  getEmailErrorMessage(){
    if(this.contactForm['email'].hasError('required')){
      return "You must enter an email address";
    }
    else if(this.contactForm['email'].hasError('required')){
      return "Not a valid email address"
    }

  }

  submitContactForm(){
    let contactDetails = this.contactForm.value;
    this.ContactService.sendContactEmail(contactDetails);
  }
}
