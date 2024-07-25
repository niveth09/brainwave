import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  profileData: any;
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailID: new FormControl(''),
    age: new FormControl(Number),
    gender: new FormControl(''),
    mobileNumber: new FormControl(''),
    panNumber: new FormControl(''),
    aadharNumber: new FormControl(''),
    status: new FormControl(Boolean),
  });
  constructor(private contactService: ContactService) {}
  onSubmitContact() {
    this.getProfiles(this.contactForm.value.emailID);
  }
  getProfiles(emailID: any) {
    this.contactService
      .getContact()
      .subscribe((res) => (this.profileData = res));
    this.profileData.forEach((profile) => {
      console.log(profile);
    });
  }
}
