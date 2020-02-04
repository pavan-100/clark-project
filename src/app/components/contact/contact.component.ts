import { Component, OnInit } from "@angular/core";
import { Contact } from "../../entities/contact";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contact: Contact;
  constructor() {
    this.contact = new Contact();
  }

  ngOnInit() {}
  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }
}
