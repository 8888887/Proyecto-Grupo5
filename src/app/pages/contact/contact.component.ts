import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  constructor(
    private fb: FormBuilder
  ) {}

  contactusForm = this.fb.group({
    persona: this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(4)]],
      apellido: [""]
    }),
    correo: ["", [Validators.required, Validators.email]],
    mensaje: [""]
  });

  __onSubmit() {
    if(this.contactusForm.valid)
    {
      console.log(this.contactusForm.value)
    }
    else {
      console.error("Formulario no valido")
    }
  }
}
